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
  release_date?: string
  revenue: number
  runtime: number
  budget: number
  status: string
  production_companies: {id: number; name: string}[]
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
    const endPoint = '/movie/'
    const response = await fetch(
      `${baseUrl}${endPoint}${id}?api_key=${api_key}`,
    )
    const data = await response.json()
    setOverViewData({
      overview: data.overview,
      genres: data.genres,
      release_date: data.release_date,
      revenue: data.revenue,
      runtime: data.runtime,
      budget: data.budget,
      status: data.status,
      production_companies: data.production_companies,
    })
  }
  const fetchCast = async (id: number) => {
    const endPoint = `/movie/${id}/credits`
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
          <Text className="w-1/3 text-white ">Release Date</Text>
          <Text className="w-2/3 text-stone-300">
            {overViewData.release_date}
          </Text>
          <Text className="w-1/3 text-white">Runtime</Text>
          <Text className="w-2/3 text-stone-300">{`${(
            overViewData.runtime / 60
          ).toFixed(0)}h ${overViewData.runtime % 60}min`}</Text>
          <Text className="w-1/3 text-white">Budget</Text>
          <Text className="w-2/3 text-stone-300">
            ${overViewData.budget.toLocaleString('en-US')}
          </Text>
          {overViewData.revenue !== 0 && (
            <>
              <Text className="w-1/3 text-white">Revenue</Text>
              <Text className="w-2/3 text-stone-300">
                ${overViewData.revenue.toLocaleString('en-US')}
              </Text>
            </>
          )}
          <Text className="w-1/3 text-white">Genre</Text>
          <Text className="w-2/3 text-stone-300">
            {overViewData.genres.map(genre => genre.name).join(', ')}
          </Text>
          <Text className="w-1/3 text-white ">Status</Text>
          <Text className="w-2/3 text-stone-300">{overViewData.status}</Text>
          <Text className="w-1/3 text-white ">Production </Text>
          <Text className="w-2/3 text-stone-300">
            {overViewData.production_companies
              .map(item => item.name)
              .join(', ')}
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
