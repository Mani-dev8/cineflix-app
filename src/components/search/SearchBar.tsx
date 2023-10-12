import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { api_key, baseUrl } from '../../utils/content'

type Props = {
    keyword:string
}

const SearchBar = ({keyword}: Props) => {
    const SearchResult=async()=>{
        const endPoint = `/search/movie?api_key=${api_key}&query=ac`
        const response=  await fetch(`${baseUrl}${endPoint}`)
        const data=await response.json();
        console.log("🚀 ~ file: SearchBar.tsx:14 ~ SearchResult ~ data   ~~~  :", data)
        
    }
    useEffect(() => {
        SearchResult()
    }, [])
    
  return (
    <View>
      <Text>SearchBar</Text>
    </View>
  )
}

export default SearchBar