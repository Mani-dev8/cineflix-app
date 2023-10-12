import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react'

type Props = {}

const Splash = (props: Props) => {
  return (
    <View style={{flex:1}} className='bg-black'>
      <LottieView source={require('../assets/lottie/SPLASH Cineflix.json')} autoPlay loop={false}/>
    </View>
  )
}

export default Splash