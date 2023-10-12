/* eslint-disable prettier/prettier */
import React from 'react'
import Svg, {Path, Circle} from 'react-native-svg'
import {View, Text, FlatList, Image, StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {IconStar,SvgComponentTrailerIcon} from '../Icons'
import { baseOriginalImageUrl } from '../../utils/content'
export interface CardProps {
  title: string
  backdropPath: string
  voteAverage: number
  voteCount: number
  overView:string
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
const Card: React.FC<CardProps> = ({
  title,
  backdropPath,
  voteAverage,
  voteCount,
  overView
}) => {
  return (
    <View className="relative  w-[100vw] aspect-square ">
      <Image
        source={{uri: `${baseOriginalImageUrl}${backdropPath}`}}
        resizeMode="cover"
        className="aspect-square w-full"
      />
      <SvgComponentTrailerIcon
        styleProp={{alignSelf: 'center',}}
        classProp="stroke-white h-[15%] w-[15%] absolute z-50 top-1/3 "
      />
      <LinearGradient
        colors={['rgba(0, 0,0, 1)', 'rgba(0, 0, 0, 0)']} // colors with opacity
        start={{x: 0.5, y: 0.74}}
        end={{x: 0.5, y: 0.3}}
        className="absolute w-full aspect-square top-0 "
      />
      <View className="absolute flex flex-col items-start px-4 bottom-0 w-full h-[36%]">
        <Text
          numberOfLines={2}
          className="text-white text-2xl leading-7 font-[400]">
          {title}
        </Text>
        <View className="flex flex-row items-center justify-center mt-1">
          <Rating value={Number((voteAverage / 2).toFixed(1))} max={5} />
          <Text className="white ml-2 text-zinc-400">{voteCount} Reviews</Text>
        </View>
        <Text className=" mt-1 text-zinc-400" numberOfLines={3}>
          {title}: {overView}
        </Text>
      </View>
    </View>
  )
}
export default Card

