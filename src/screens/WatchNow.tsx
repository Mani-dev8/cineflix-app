import {View, Text} from 'react-native';
import {
  RouteProp,
  NavigationContainer,
  useRoute,
} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useEffect, useState} from 'react';
import Overview from '../components/Tab/Overview';
import DetailCard from '../components/movie details/DetailsCard';
import Card from '../components/movie details/Card';
import {api_key, baseUrl, height} from '../utils/content';
import WebView from 'react-native-webview';

type RootStackParamList = {
  movieId: {data: {id: number}[]};
};
export type OverviewScreenRouteProp = RouteProp<RootStackParamList, 'movieId'>;
const Tab = createMaterialTopTabNavigator();
const WatchNow: React.FC = () => {
  const route = useRoute<OverviewScreenRouteProp>();
  const {id} = route.params.data[0];
  return (
    <View style={{flexGrow: 1}} className="bg-black">
      {/* <Text className="text-white text-5xl">{id}</Text> */}
      <WebView
        source={{
          uri: 'https://doc.viload.org/watch/?v21#MVpOY0pkR3V3SytKVEpTUEsvU3lIMUhnVkhOclJtOHZRd3hrMlQwdUNZV3BBYUVjdU9ycXlVSXVRaW9FcncybmZwdWZuVnhuSUpnPQ',
        }}
        className="z-50 -mt-32 bg-black"
      />
    </View>
  );
};

export default WatchNow;
