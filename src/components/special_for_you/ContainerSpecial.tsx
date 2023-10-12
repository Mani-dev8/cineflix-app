import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import Card from './Card'
import {api_key, baseUrl} from '../../utils/content'
  import { useNavigation } from '@react-navigation/native'
import { SvgComponentBookMarkIcon } from '../../assets/icons/icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
type TopMovie = {
  // u can also use iterface as well here like Home.tsx
  id: number
  title: string
  poster_path: string
  watchlisted:boolean
}

type Props={
  endPoint:string
  title:string
}

const ContainerSpecial = ({title,endPoint}: Props) => {
  const [topRated, setTopRated] = useState<TopMovie[]>([])
  

  const navigation = useNavigation()
  async function topMovies() {
    const response = await fetch(
      `${baseUrl}${endPoint}?api_key=${api_key}`,
    )
    const movies = await response.json()
    
    const storedWatchList = await AsyncStorage.getItem('watchList');
    const watchList = storedWatchList ? JSON.parse(storedWatchList) : [];

    const updatedMovies = movies.results.map(movie => {
      const isWatchlisted = watchList.some(item => item.id === movie.id);
      return {...movie, watchlisted: isWatchlisted};
    });

    setTopRated(updatedMovies);
    
  }
  const addWatchList = async (id: number) => {
  try {
    const updatedMovies = topRated.map((movie) => {
      if (movie.id === id) {
        if (movie.watchlisted) {
          // Remove from watch list
          removeFromWatchList(movie.id);
          return { ...movie, watchlisted: false };
        } else {
          // Add to watch list
          addToWatchList(movie.id, movie.title,movie.poster_path);
          return { ...movie, watchlisted: true };
        }
      }
      return movie;
    });

    setTopRated(updatedMovies);
  } catch (error) {
    console.log('Error adding/removing from watch list:', error);
  }
};
  const addToWatchList = async (movieId: number, movieName: string,posterPath:string) => {
    try {
      const storedWatchList = await AsyncStorage.getItem('watchList');
      const watchList = storedWatchList ? JSON.parse(storedWatchList) : [];

      const updatedWatchList = [...watchList, {id: movieId, name: movieName,poster:posterPath}];
      await AsyncStorage.setItem('watchList', JSON.stringify(updatedWatchList));
    } catch (error) {
      console.log('Error adding to watch list:', error);
    }
  };

  const removeFromWatchList = async (movieId: number) => {
    try {
      const storedWatchList = await AsyncStorage.getItem('watchList');
      const watchList = storedWatchList ? JSON.parse(storedWatchList) : [];

      const updatedWatchList = watchList.filter(item => item.id !== movieId);
      await AsyncStorage.setItem('watchList', JSON.stringify(updatedWatchList));
    } catch (error) {
      console.log('Error removing from watch list:', error);
    }
  };
  useEffect(() => {
    topMovies()
    
  }, [])

  return (
    <View className="px-4 mt-4">
      <Text className="text-white text-[16px] font-semibold">{title}</Text>
      <FlatList
        className="w-[100vw] mt-3 pb-2"
        data={topRated}
        pagingEnabled
        snapToAlignment="center"
        horizontal
        renderItem={({item}) => (
          <View className="relative">
            <TouchableOpacity activeOpacity={0.7} onPress={()=>addWatchList(item.id)} className="absolute top-1 z-30 right-4">
              <SvgComponentBookMarkIcon class={` ${item.watchlisted?"fill-red-500":"fill-zinc-400"} h-5 w-5 `} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Movie Detail', {data: [{id: item.id}]})
              }>
              <Card
                title={item.title}
                posterPath={item.poster_path}
                id={item.id}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default ContainerSpecial
