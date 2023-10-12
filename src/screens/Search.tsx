import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  FlatList,
} from 'react-native'
import React, {useEffect, useState} from 'react'
// import SearchBar from '../components/search/SearchBar'
import {BackSvgComponent} from '../assets/icons/icons'
import {useNavigation} from '@react-navigation/native'
import LottieView from 'lottie-react-native'

import {api_key, baseOriginalImageUrl, baseUrl} from '../utils/content'
type Props = {}
interface PopularMovie {
  backdrop_path: string
  id: number
  title: string
}
interface PopularTv {
  name: string
  id: number
  backdrop_path: string
}
interface Results {
  backdrop_path: string
  id: number
  title: string
}
const Search = (props: Props) => {
  const navigation = useNavigation()
  const [movies, setMovies] = useState<PopularMovie[]>([])
  const [results, setResults] = useState<Results[]>([])
  const [loading, setLoading] = useState(true)
  const [tv, setTv] = useState<PopularTv[]>([])
  useEffect(() => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    const popularMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&vote_average.gte=${5}`,
        )
        const data = await response.json()
        setMovies(data.results)
        console.log('data=', data.results)
      } catch (error) {
        console.error(error)
      }
    }
    const popularTv = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=vote_average.desc&vote_average.gte=${5}&page=1`,
        )
        const data = await response.json()
        // setMovies(data.results);
        console.log('data=', data.results)
        setTv(data.results)
      } catch (error) {
        console.error(error)
      }
    }
    Promise.all([popularMovie(), popularTv()])
      .then(() => setLoading(false))
      .catch(err => console.log(err))
  }, [])
  const searchResult = async (keyword: string) => {
    // await fetch ('')
    console.log(keyword)
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURIComponent(
          keyword,
        )}`,
      )
      const data = await response.json()
      console.log('data \n', data.results)
      setResults(data.results)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View className="bg-black flex-1 p-2 pt-4">
      {loading ? (
        <View className="w-3/4 aspect-square m-auto">
          <LottieView
            source={require('../assets/lottie/loading animation.json')}
            autoPlay
          />
        </View>
      ) : (
        <>
          <View className="flex-row w-full bg-zinc-800 rounded py-0.5 mb-5">
            <Pressable
              className="active:bg-zinc-700 p-2 rounded-full active:opacity-50 m-1  h-10 w-10 "
              onPress={() => {
                // navigation.navigate('Home')
              }}>
              <BackSvgComponent class=" fill-white  " />
            </Pressable>
            <TextInput
              onChangeText={text => searchResult(text)}
              className="w-[87%] h-full  text-white text-xl"
              cursorColor={'rgb(239 68 68)'}
              placeholder="Search"
              placeholderTextColor={'gray'}
            />
          </View>

          {results.length === 0 ? (
            <ScrollView>
              <View>
                <Text className="text-zinc-500 text-lg py-1">
                  Popular Movie
                </Text>
                <View>
                  {movies &&
                    movies.slice(0, 5).map(item => {
                      return (
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('Details', {
                              data: [{id: item.id}],
                            })
                          }
                          activeOpacity={0.7}
                          key={item.id}
                          className="flex-row items-center py-1.5 ">
                          <Image
                            source={{
                              uri: `${baseOriginalImageUrl}${item.backdrop_path}`,
                            }}
                            className="w-[14%] h-20"
                          />
                          <Text className="text-zinc-500 ml-4 text-base w-[70%]">
                            {item.title}
                          </Text>
                        </TouchableOpacity>
                      )
                    })}
                </View>
                <Text className="text-zinc-500 text-lg py-1">
                  Popular Tv Shows
                </Text>
                <View>
                  {tv &&
                    tv.slice(0, 5).map(item => {
                      return (
                        <TouchableOpacity
                          activeOpacity={0.7}
                          key={item.id}
                          className="flex-row items-center py-1.5 ">
                          <Image
                            source={{
                              uri: `${baseOriginalImageUrl}${item.backdrop_path}`,
                            }}
                            className="w-[14%] h-20"
                          />
                          <Text className="text-zinc-500 ml-4 text-base w-[70%]">
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      )
                    })}
                </View>
              </View>
            </ScrollView>
          ) : (
            <View>
              <Text className="text-zinc-500 text-lg py-1">
                Searched Results
              </Text>
              <View className="w-[100%] pb-32">
                <FlatList
                  data={results}
                  numColumns={4}
                  ItemSeparatorComponent={() => <View style={{margin: 5}} />}
                  renderItem={({item}) => (
                    <View className="h-48 w-[24%]  m-auto">
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Details', {
                            data: [{id: item.id}],
                          })
                        }>
                        <Image
                          source={{
                            uri: `${baseOriginalImageUrl}${item.backdrop_path}`,
                          }}
                          className="w-full h-40"
                        />
                        <Text numberOfLines={2} className="text-xs">
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            </View>
          )}
        </>
      )}
    </View>
  )
}

export default Search
