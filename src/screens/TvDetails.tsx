import {View, Text} from 'react-native'
import {
  RouteProp,
  NavigationContainer,
  useRoute,
} from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import React, {useEffect, useState} from 'react'
import DetailCard from '../components/tv show details/DetailsCard'
import Card from '../components/movie details/Card'
import {api_key, baseUrl, height} from '../utils/content'
import OverviewTvDetails from '../components/Tab/OverviewTvDetails'

type RootStackParamList = {
  Overview: {data: {id: number}[]}
}
export type OverviewScreenRouteProp = RouteProp<RootStackParamList, 'Overview'>
const Tab = createMaterialTopTabNavigator()
const Details: React.FC = () => {
  const route = useRoute<OverviewScreenRouteProp>()
  const {id} = route.params.data[0]
  return (
    <View style={{flexGrow: 1}}>
      <DetailCard id={id} />
      {/* <Card
        backdropPath={'/wybmSmviUXxlBmX44gtpow5Y9TB.jpg'}
        title="Shazam! Fury of the Gods"
        voteAverage={6.984}
        voteCount={781}
        overView={'afkfsl'}
      /> */}
      <TabNavigator />
    </View>
  )
}

const Video = () => {
  return (
    <View className="h-full bg-[#141414]">
      <Text>Video</Text>
    </View>
  )
}
const TabNavigator = () => {
  const route = useRoute<OverviewScreenRouteProp>()
  const {id} = route.params.data[0]
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'red', // Set active tab font color
          tabBarInactiveTintColor: 'black', // Set inactive tab font color
          tabBarStyle: {backgroundColor: '#141414'}, // Set background color of the tab bar
          tabBarIndicatorStyle: {backgroundColor: 'red'}, // Set color of the active tab indicator
          swipeEnabled:false,
          tabBarLabelStyle: {fontWeight: 'bold', color: 'white'}, // Set font style and color for tab labels
        })}>
        <Tab.Screen
          name={'OVERVIEW'}
          component={OverviewTvDetails as React.ComponentType<any>}
          initialParams={{
            data: [
              {
                id: id,
              },
            ],
          }}
        />
        <Tab.Screen name={'Video'} component={Video} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default Details
