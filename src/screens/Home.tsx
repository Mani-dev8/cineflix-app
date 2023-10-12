/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, FlatList,Dimensions,StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Card from '../components/movie details/Card';
import ContainerSpecial from '../components/special_for_you/ContainerSpecial'
import { api_key } from '../utils/content';
import { baseUrl } from '../utils/content';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { IntroductionAnimationScreen } from '../introduction_animation';
const {height,width} = Dimensions.get('screen');
const Home = ():JSX.Element => {
  const navigation=useNavigation()
  interface Movie {
    backdrop_path: string
    id: number
    title: string
    vote_average:number
    vote_count:number
    overview:string
  }
  const [trendingMovieData, setTrendingMovieData] = useState<Movie[]>([]);
  const trendingMoviesEndPoint: string = '/trending/movie/week';
  const trendingMovies = async () => {
    try {
      const response = await fetch(
      `${baseUrl}${trendingMoviesEndPoint}?api_key=${api_key}`,
    );
    const data = await response.json();
      setTrendingMovieData(data.results);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  };
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    trendingMovies();
  }, []);
 
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
            data={trendingMovieData}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('Movie Detail', {data: [{id: item.id}]})
                }>
                <Card
                  title={item.title}
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
          <ContainerSpecial
            title="Special for you"
            endPoint="/movie/top_rated"
          />
          <ContainerSpecial title="Now Playing" endPoint="/movie/now_playing" />
          <ContainerSpecial title="Upcoming" endPoint="/movie/upcoming" />
        </ScrollView>
      )}
    </View>
  )
};
export default Home;
const style = StyleSheet.create({
  container:{
    width,
    height,
  },
});
