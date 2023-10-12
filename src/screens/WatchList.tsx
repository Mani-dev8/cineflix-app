import { View, Text, FlatList, TouchableOpacity,Image,Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'


type Props = {}
type WatchlistData={
  name:string,
  poster:string,
  id:number
}
const WatchList = (props: Props) => {
  const navigation=useNavigation()
  const [watchlistData, setWatchlistData] = useState<any>(null)
  const [watchlistDataTv, setWatchlistDataTv] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("movie")
  const width=Dimensions.get("window").width
  const getWatchlistData = async () => {
    try {
      var data = await AsyncStorage.getItem('watchList');
      setActiveTab('movie')
      console.log(
        '🚀 ~ file: WatchList.tsx:18 ~ getWatchlistData ~ data   ~~~  :',
        data,
      );
      if (data) {
        console.log(
          '🚀 ~ file: WatchList.tsx:17 ~ getWatchlistData ~ data   ~~~  :',
          data,
        );
        setWatchlistData(JSON.parse(data));
      }
    } catch (error) {
      console.log('Error retrieving watchlist data:', error);
    }
  };
  const getWatchlistDataTv = async () => {
    try {
      
      var data = await AsyncStorage.getItem('watchListTv');
      setActiveTab('tvShow')
      console.log(
        '🚀 ~ file: WatchList.tsx:18 ~ getWatchlistData ~ data   ~~~  :',
        data,
      );
      if (data) {
        console.log(
          '🚀 ~ file: WatchList.tsx:17 ~ getWatchlistData ~ data   ~~~  :',
          data,
        );
        
        setWatchlistDataTv(JSON.parse(data));
      }
    } catch (error) {
      console.log('Error retrieving watchlist data:', error);
    }
  };
 useEffect(() => {
  getWatchlistData();
 }, [])
 
  return (
    <View className=" bg-[#141414] flex-1 p-2">
      {/* <Text className="text-white text-xl self-center py-6 font-[500]">
        Your WatchList
      </Text> */}
      <View className="flex flex-row  justify-between">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => getWatchlistData()}
          className={`w-[49%] h-14 ${
            activeTab === 'movie' ? 'bg-red-500' : 'bg-zinc-800'
          } rounded-xl `}>
          <Text className="text-white font-[400] text-lg  m-auto">Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => getWatchlistDataTv()}
          activeOpacity={0.7}
          className={`w-[49%] h-14 ${
            activeTab === 'tvShow' ? 'bg-red-500' : 'bg-zinc-800'
          } rounded-xl `}>
          <Text className="text-white font-[400] text-lg  m-auto">
            Tv Shows
          </Text>
        </TouchableOpacity>
      </View>
          <Text className="text-white text-lg font-[400] pt-5 pb-1 pl-1">Watchlists</Text>
      <ScrollView className="mt-2 flex-1 w-full pl-1">
        <View className="bg-[#141414] ">
          {activeTab === 'movie'&& (watchlistData ? (
            <View
              className={`${
                activeTab === 'movie' ? 'flex' : 'hidden'
              } flex-1 flex-row flex-wrap items-start `}>
              {watchlistData.map(item => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={item.id}
                    onPress={() =>
                      navigation.navigate('Movie Detail', {
                        data: [{id: item.id}],
                      })
                    }>
                    <View
                      className={`my-2 w-[30vw] mr-[1.6vw] h-[calc(600/3)] `}>
                      <Image
                        className={`w-full h-[90%] rounded-lg`}
                        source={{
                          uri: `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${item.poster}`,
                        }}
                      />
                      <Text numberOfLines={1} className="mt-2 text-white">
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            <Text>No data</Text>
          ))}
          
          {watchlistDataTv && activeTab === 'tvShow' ? (
            <View
              className={`${
                activeTab === 'tvShow' ? 'flex' : 'hidden'
              } flex-1 flex-row flex-wrap items-start `}>
              {watchlistDataTv.map(item => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={item.id}
                    onPress={() =>
                      navigation.navigate('Tv Detail', {
                        data: [{id: item.id}],
                      })
                    }>
                    <View className={`my-2 w-[30vw] mr-[1.6vw] h-[calc(600/3)] `}>
                      <Image
                        className={`w-full h-[90%] rounded-lg`}
                        source={{
                          uri: `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${item.poster}`,
                        }}
                      />
                      <Text numberOfLines={1} className="mt-2 text-white">
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            ''
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default WatchList