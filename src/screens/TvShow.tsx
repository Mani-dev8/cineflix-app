import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { api_key, baseUrl } from '../utils/content'
import Card from '../components/tv show details/Card'
import CategoryList from '../components/tv show details/CategoryListContainer'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
type Props = {
  
}
interface TrendingTvShow {
  name: string
  id: number
  backdrop_path: string
  overview: string
  vote_average: number
  vote_count: number
}
const TvShow = (props: Props) => {
  const navigation=useNavigation()
  const  [loading, setLoading] = useState(true)
  const [trendingTvShow, setTrendingTvShow] = useState<TrendingTvShow[]>([])
  useEffect(() => {
    const popularTvShow=async () => {
      try {
      const response = await fetch(
        `${baseUrl}/trending/tv/week?api_key=${api_key}`,
      )
      const data=await response.json();
      setTrendingTvShow(data.results);
      console.log('data.results', data.results);
      } catch (error) {
        console.log('error', error)
      }finally{
        setLoading(false)
      }
    }
  popularTvShow()
  }, [])
  
  return (
    <View className="bg-[#141414] w-[100vw] flex h-full">
      {loading ? (
        <View className="w-3/4 aspect-square m-auto">
          <LottieView
            source={require('../assets/lottie/loading animation.json')}
            autoPlay
          />
        </View>
      ) : (
        <ScrollView>
          <FlatList
            pagingEnabled
            snapToAlignment="center"
            horizontal
            data={trendingTvShow}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('Tv Detail', {data: [{id: item.id}]})
                }}>
                <Card
                  name={item.name}
                  backdropPath={item.backdrop_path}
                  voteAverage={item.vote_average}
                  voteCount={item.vote_count}
                  overView={item.overview}
                />
              </TouchableOpacity>
            )}
          />
          {/*   <TouchableOpacity
          onPress={() =>
            navigation.navigate('Movie Detail', {
              data: [{storyLine: 'ajklfsjlkfsd '}],
            })
          }>
          <Text>Details</Text>
        </TouchableOpacity> */}
          <CategoryList title="Special for you" endPoint="/tv/top_rated" />
          <CategoryList title="Popular" endPoint="/tv/popular" />
        </ScrollView>
      )}
    </View>
  )
}

export default TvShow