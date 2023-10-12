import {View, Text, Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { BackSvgComponent, SvgComponentBookMarkIcon, SvgComponentCategoryIcon, SvgComponentLoginIcon, SvgComponentLogoutIcon, SvgComponentUserIcon } from '../assets/icons/icons'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
type Props = {}
type SettingCardProps={
  name:string
  icon:React.ReactNode
  divide?:string
}
const SettingCard=({name,icon,divide}:SettingCardProps)=>{
  return (
    <View className={`flex-row gap-x-3  items-center py-2.5   `}>
      <View className="w-10 h-10 rounded-full bg-black pt-1.5">{icon}</View>
      <Text className="text-zinc-400 text-base font-semibold">{name}</Text>
    </View>
  )
}
const Settings = (props: Props) => {
  
  const [userData, setUserData] = useState<any>(null)

  const logOut=async()=>{
     try {
       await AsyncStorage.removeItem('userData');
       navigation.navigate('Login'); // Navigate to the login screen after logging out
     } catch (error) {
       console.log('Error logging out:', error);
     }
  }

  useEffect(() => {
    const getUser=async()=>{
      const data=await AsyncStorage.getItem('userData');
      const user=data?JSON.parse(data):null;
      setUserData(user);
      console.log("🚀 ~ file: Settings.tsx:28 ~ getUser ~ user   ~~~  :", user)
    }
    getUser()
  }, [])
  
  const navigation=useNavigation()
  return (
    <View className="flex-1 bg-[#141414] w-full p-2">
      <Text className="uppercase text-lg text-zinc-300 self-center py-5 font-semibold">
        Profile
      </Text>
      <View className="bg-zinc-800 w-[94%] border-r border-b border-zinc-700  mx-auto p-3 rounded-lg items-center ">
        <SvgComponentUserIcon class="fill-zinc-600 h-24 aspect-square mt-3" />
        <View className=" flex gap-y-1 mt-1 items-center py-2">
          {userData ? (
            <View>
              <Text className="text-red-500 text-xl">{userData.userName}</Text>
            </View>
          ) : (
            <View className="flex flex-col items-center">
              <TouchableOpacity
                className="px-2 w-24 rounded flex flex-row items-center "
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Login')}>
                <Text className="text-base font-semibold text-red-500  self-center ">
                  LOG IN
                </Text>
                <SvgComponentLoginIcon
                  class={' -left-4 scale-90  stroke-red-500'}
                />
              </TouchableOpacity>
              <Text className="text-zinc-500 text-base mb-2">
                For a better experience
              </Text>
            </View>
          )}
        </View>
      </View>
      <View className="flex flex-col divide-zinc-500 px-2 mt-4 ">
        <Text className="uppercase text-white text-base font-semibold mt-6 mb-3">
          Settings
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('WatchList')}>
          <SettingCard
            divide="true"
            name="Watch List"
            icon={
              <SvgComponentBookMarkIcon class="fill-zinc-500 w-6/12  h-4/5 self-center" />
            }
          />
        </TouchableOpacity>

        <SettingCard
          name="Category"
          icon={
            <SvgComponentCategoryIcon class="stroke-zinc-500 w-3/5 h-4/5 self-center" />
          }
        />
        {userData && (
          <TouchableOpacity activeOpacity={0.7} onPress={logOut}>
            <SettingCard
              name="Log out"
              icon={
                <SvgComponentLogoutIcon class="stroke-zinc-500 w-3/5 h-4/5 self-center" />
              }
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default Settings
