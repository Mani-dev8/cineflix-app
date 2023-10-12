import {View, Text, ScrollView, Image, FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'
import {OverviewScreenRouteProp} from '../../screens/Details'
import {api_key, baseOriginalImageUrl, baseUrl} from '../../utils/content'

type Props = {
  route: OverviewScreenRouteProp
}
type OverViewData = {
  overview: string
  genres?: {id: number; name: string}[]
  networks?: {id: number; name: string}[]
  last_air_date?: string
  first_air_date?: string
  spoken_languages?: string
  number_of_seasons?: number
  number_of_episodes?: number
  revenue: number
  runtime: number
  budget: number
  status: string
}
type Cast = {
  cast: {name: string; character: string; profile_path: string}[]
}
const Overview = ({route}: Props) => {
  const {data} = route.params
  const {id} = data[0]
  const [overViewData, setOverViewData] = useState<OverViewData | null>(null)
  const [castData, setCastData] = useState<Cast | null>(null)
  const fetchData = async (id: number) => {
    const endPoint = '/tv/'
    const response = await fetch(
      `${baseUrl}${endPoint}${id}?api_key=${api_key}`,
    )
    const data = await response.json()
    console.log('id', id)
    console.log('data.overview', data.overview)
    console.log('data.genres', data.genres)
    console.log('data.last_air_date', data.last_air_date)
    console.log('data.first_air_date', data.first_air_date)
    console.log('data.first_air_date', data.first_air_date)
    console.log('data.number_of_seasons', data.number_of_seasons)
    console.log('data.number_of_episodes', data.number_of_episodes)
    
    console.log('data.networks', data.networks)
    console.log('data.status', data.status)
    console.log('data.spoken_languages[0].english_name', data.spoken_languages[0].english_name)
    console.log('data.last_episode_to_air.runtime', data.last_episode_to_air.runtime)
    setOverViewData({
      overview: data.overview,
      genres: data.genres,
      networks: data.networks,
      last_air_date: data.last_air_date,
      first_air_date: data.first_air_date,
      spoken_languages: data.spoken_languages[0].english_name,
      number_of_seasons: data.number_of_seasons,
      number_of_episodes: data.number_of_episodes,
      runtime: data.last_episode_to_air.runtime,
      budget: data.budget,
      revenue: data.revenue,
      status: data.status,
    })
  }
  const fetchCast = async (id: number) => {
    const endPoint = `/tv/${id}/credits`
    const response = await fetch(`${baseUrl}${endPoint}?api_key=${api_key}`)
    const data = await response.json()
    setCastData(data)
  }
  useEffect(() => {
    fetchData(id)
    fetchCast(id)
  }, [])

  return (
    <ScrollView
      style={{flexGrow: 1}}
      className="h-full bg-[#141414] px-4 pt-6 ">
      <Text className="text-white font-semibold text-lg pb-4">StoryLine</Text>
      <Text className="text-stone-300 leading-5 mb-6">
        {overViewData?.overview}
      </Text>
      {overViewData && overViewData.genres && (
        <View className="flex flex-row flex-wrap gap-y-2 pb-10">
          <Text className="w-1/3 text-white ">First Aired</Text>
          <Text className="w-2/3 text-stone-300">
            {overViewData.first_air_date}
          </Text>
          <Text className="w-1/3 text-white ">First Aired</Text>
          <Text className="w-2/3 text-stone-300">
            {overViewData.last_air_date}
          </Text>
          <Text className="w-1/3 text-white">Runtime</Text>
          <Text className="w-2/3 text-stone-300">{`${(
            overViewData.runtime / 60
          ).toFixed(0)}h ${overViewData.runtime % 60}min`}</Text>

          <Text className="w-1/3 text-white">Genre</Text>
          <Text className="w-2/3 text-stone-300">
            {overViewData.genres.map(genre => genre.name).join(', ')}
          </Text>
          <Text className="w-1/3 text-white ">Seasons</Text>
          <Text className="w-2/3 text-stone-300">
            {overViewData.number_of_seasons}
          </Text>
          <Text className="w-1/3 text-white ">Episodes</Text>
          <Text className="w-2/3 text-stone-300">
            {overViewData.number_of_episodes}
          </Text>

          <Text className="w-1/3 text-white ">Status</Text>
          <Text className="w-2/3 text-stone-300">{overViewData.status}</Text>

          <Text className="w-1/3 text-white ">Language</Text>
          <Text className="w-2/3 text-stone-300">
            {overViewData.spoken_languages}
          </Text>
          <Text className="w-1/3 text-white">Network</Text>
          <Text className="w-2/3 text-stone-300">
            {overViewData.networks?.map(item => item.name).join(',')}
          </Text>
        </View>
      )}
      <Text className="font-semibold text-white text-lg pb-6">Cast</Text>
      {castData && castData.cast && (
        <FlatList
          data={castData?.cast} //! optional chaining concept introduced in ES2020
          horizontal
          className="pb-10"
          renderItem={({item}) => (
            <View className="mr-2 w-32">
              <Image
                source={{uri: `${baseOriginalImageUrl}${item.profile_path}`}}
                className="h-48 w-32"
              />
              <Text className="text-white pt-2 text-[13px]">{item.name}</Text>
              <Text className="text-zinc-500 text-xs ">{item.character}</Text>
            </View>
          )}
        />
      )}
    </ScrollView>
  )
}

export default Overview
