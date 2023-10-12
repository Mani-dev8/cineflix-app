import {View, Text, Image, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import {api_key, baseUrl} from '../../utils/content'
import {useNavigation} from '@react-navigation/native'
type CardProps = {
  name: string
  posterPath: string
  id: number
}
type Genres = {
  id: number
  name: string
}
const Card = ({name, posterPath, id}: CardProps) => {
  const navigation = useNavigation()
  const [genresData, setGenresData] = useState<Genres[]>([])
  async function genres(id: number) {
    const response = await fetch(`${baseUrl}/tv/${id}?api_key=${api_key}`)
    const data = await response.json()
    console.log('data.genres', data.genres)
    setGenresData(data.genres)
  }
  useEffect(() => {
    genres(id)
  }, [])
  return (
    <View className="mr-3 w-[110]">
      <Image
        className={`w-full h-[162] rounded-lg`}
        source={{
          uri: `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${posterPath}`,
        }}
      />
      <Text numberOfLines={1} className="mt-2 text-white">
        {name}
      </Text>
      <View className="flex flex-row ">
        <Text className="text-xs text-zinc-500 ">
        {genresData.slice(0, 2).map((item, index) => (
          <React.Fragment key={item.id}>
            {item.name}
            {index < 1 && <Text className="text-xs text-zinc-500" >, </Text>}
          </React.Fragment>
        ))}
        </Text>
      </View>
    </View>
  )
}

export default Card
