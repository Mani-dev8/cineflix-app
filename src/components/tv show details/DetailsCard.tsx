import {View, Text, Image, ActivityIndicator,Button,TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import {api_key, baseOriginalImageUrl, baseUrl} from '../../utils/content'
import LinearGradient from 'react-native-linear-gradient'
import { IconStar } from '../Icons'
import { SvgComponentMovieIcon } from "../Icons";
import ytdl from 'react-native-ytdl'
import WebView from 'react-native-webview'

interface Movie {
  backdrop_path: string
  id: number
  name: string
  vote_average: number
  vote_count: number
}
type Props = {
  id: number
}
type RatingProps = {
  value: number
  max?: number
}
const Rating = ({value, max = 5}: RatingProps) => {
  const percentage = Number(((value / max) * 100).toFixed(1))
  return (
    <View className="relative flex  flex-row items-center max-w-[120px]">
      {Array.from(Array(max).keys()).map((_, i) => (
        <IconStar key={String(i)} className={'flex flex-row '} />
      ))}
      <View
        className="absolute top-0 right-0 bottom-0 bg-zinc-900 opacity-60"
        style={{
          width: `${100 - percentage}%`,
          backfaceVisibility: 'hidden',
        }}></View>
    </View>
  )
}

const DetailsCard = ({id}: Props) => {
  const [movieData, setMovieData] = useState<Movie | null>(null)
  const [videoUrl,setVideoUrl]=useState<string|null>(null)
  const fetchMovieData = async (id: number) => {

    
    const endPoint = `/tv/${id}`
    const response = await fetch(`${baseUrl}${endPoint}?api_key=${api_key}`)
    const data = await response.json()
    const trailerResponse = await fetch(
      `${baseUrl}${endPoint}?api_key=${api_key}&language=en-US&append_to_response=videos`,
    )
    const trailerData=await trailerResponse.json()
    // console.log("🚀 ~ file: DetailsCard.tsx:49 ~ fetchMovieData ~ trailerData   ~~~  :", trailerData['videos'])
    trailerData.videos.results.some((item)=>{
      if(item.type==='Trailer'){
        console.log('item.key', item.key)
        const movieUrl=async()=>{
           const urls = await ytdl(`${item.key}`, {
             quality: 'highest',
             format: 'mp4',
           })
           setVideoUrl(urls[0]['url'])
           console.log(
             "🚀 ~ file: DetailsCard.tsx:64 ~ trailerData.videos.results.some ~ urls[0]['url']   ~~~  :",
             urls[0]['url'],
           )
        }
        movieUrl()
       
        return true
    }
    })
    setMovieData({
      id: data.id,
      backdrop_path: data.backdrop_path,
      name: data.name, 
      vote_average: data.vote_average,
      vote_count: data.vote_count,
    })
  }
  useEffect(() => {
    fetchMovieData(id)
  }, [])

  return (
    movieData && (
      <View className="relative  w-[100vw] aspect-square bg-black">
        {videoUrl ? (
          <WebView source={{uri: videoUrl}} className="z-50 -mt-32 bg-black" />
        ) : (
          <ActivityIndicator
            style={{alignSelf: 'center', height: '80%'}}
            color={'#ef4444'}
            size={'large'}
          />
        )}
        {/* <LinearGradient
          colors={['rgba(0, 0,0, 1)', 'rgba(0, 0, 0, 0)']} // colors with opacity
          start={{x: 0.5, y: 1}}
          end={{x: 0.5, y: 0.3}}
          className="absolute w-full aspect-square top-0 "
        /> */}
        <View className="absolute flex flex-col items-start px-4 bottom-10 w-full h-[25%]">
          <Text
            numberOfLines={2}
            className="text-white text-2xl leading-7 font-[400]">
            {movieData.name}
          </Text>
          <View className="flex flex-row items-center justify-center mt-1">
            <Rating
              value={Number((movieData.vote_average / 2).toFixed(1))}
              max={5}
            />
            <Text className="white ml-2 text-zinc-400">
              {movieData.vote_count} Reviews
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} className="bg-red-500 rounded-sm  text-center py-2 flex flex-row items-center px-2 mt-2.5">
            <Text className="font-semibold uppercase text-black ">
              Watch Now{' '}
            </Text>
            <SvgComponentMovieIcon styleProp={{}} classProp={'h-5 w-5 ml-1'} />
          </TouchableOpacity>
        </View>
      </View>
    )
  )
}

export default DetailsCard
