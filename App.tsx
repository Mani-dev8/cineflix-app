import React, {useRef, useState, useEffect} from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Svg, Path} from 'react-native-svg';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Search from './src/screens/Search';
import homeLottie from './src/assets/lottie/home-lottie.json';
import searchLottie from './src/assets/lottie/search-lottie.json';
import tvLottie from './src/assets/lottie/tv-retro-lottie.json';
import settingsLottie from './src/assets/lottie/settings-lottie.json';
import {
  SvgComponentHome,
  SvgComponentSearch,
  SvgComponentSettings,
  SvgComponentTv,
} from './src/assets/icons/icons';
import Splash from './src/screens/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TvShow from './src/screens/TvShow';
import TvDetails from './src/screens/TvDetails';
import Settings from './src/screens/Settings';
import {IntroductionAnimationScreen} from './src/introduction_animation';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import OtpVerification from './src/screens/OtpVerification';
import WatchList from './src/screens/WatchList';
import Subscription from './src/screens/Subscription';
import WatchNow from './src/screens/WatchNow';
const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{headerShown: false}}
        name="Home Screen"
        component={Home}
      />
      <RootStack.Screen
        name="Movie Detail"
        component={Details}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}
function TvStack() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{headerShown: false}}
        name="Tv Screen"
        component={TvShow}
      />
      <RootStack.Screen
        name="Tv Detail"
        component={TvDetails}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}
function SearchStack() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="SearchScreen"
        component={Search}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}
function SetttingsStack() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Settings Screen"
        component={Settings}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}
const tabArr = [
  {
    route: 'Home',
    label: 'Home',
    component: HomeStack,
    type: homeLottie,
    icon: SvgComponentHome,
  },

  {
    route: 'Tv',
    label: 'Tv',
    component: TvStack,
    type: tvLottie,
    icon: SvgComponentTv,
  },
  {
    route: 'Search',
    label: 'Search',
    component: SearchStack,
    type: searchLottie,
    icon: SvgComponentSearch,
  },
  {
    route: 'Settings',
    label: 'Settings',
    component: SetttingsStack,
    type: settingsLottie,
    icon: SvgComponentSettings,
  },
];

function TabNavigator() {
  const navigationState = useNavigationState(state => state);
  const tabRefs = tabArr.map(() => useRef(null));
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  const [isTabFocused, setIsTabFocused] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    setIsTabFocused(false);
    setTimeout(() => {
      setIsTabFocused(true);
    }, 10);
  }, [navigationState]);
  const navigationCircleAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: isTabFocused ? withTiming(-10, {duration: 100}) : 0},
      ],
    };
  });
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 62,
          paddingTop: 10,
          backgroundColor: '#202020',
          borderTopWidth: 0,
        },
      }}>
      {tabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            listeners={{
              tabPress: () => {
                if (item.route == 'Search') {
                  navigation.navigate('Search');
                }
              },
            }}
            options={{
              tabBarLabel: ({focused}) => {
                return focused ? (
                  false
                ) : (
                  <Text style={{paddingBottom: 6, color: 'gray'}}>
                    {item.route}
                  </Text>
                );
              },
              tabBarIcon: ({focused}) => {
                const animationRef = tabRefs[index];
                useEffect(() => {
                  //  if (focused) {
                  //    animationRef.current?.play();
                  //  }
                  //@ts-ignore
                  animationRef.current?.play();
                }, [navigationState]);
                return (
                  <View>
                    {focused ? (
                      <View
                        style={{
                          position: 'relative',
                          alignItems: 'center',
                          marginTop: -36.5,
                        }}>
                        <Animated.View
                          style={[
                            {
                              position: 'absolute',
                              borderWidth: 1,
                              borderColor: 'red',
                              zIndex: 1,
                              height: 50,
                              width: 50,
                              borderRadius: 40,
                              backgroundColor: '#EF4444',
                              top: 5,
                            },
                            navigationCircleAnimatedStyle,
                          ]}></Animated.View>
                        <AnimatedSvg
                          width={100}
                          height={71}
                          fill="none"
                          style={{position: 'absolute'}}
                          viewBox="5 1 10.3 190">
                          <Path
                            fill="#141414"
                            d="M52 0h166v57c0 45.84-37.16 83-83 83s-83-37.16-83-83V0zM270 0h-52v52c0-28.719 23.281-52 52-52zM52 52V0H0c28.719 0 52 23.281 52 52z"
                          />
                        </AnimatedSvg>
                        <LottieView
                          ref={animationRef}
                          source={item.type}
                          autoPlay={false}
                          loop={false}
                          style={{
                            width: 40,
                            position: 'absolute',
                            height: 40,
                            zIndex: 10,
                          }}
                        />
                      </View>
                    ) : (
                      <item.icon style={{marginTop: 7}} />
                    )}
                  </View>
                );
              },
            }}
            component={item.component}
          />
        );
      })}
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstTimeLaunchApp, setIsFirstTimeLaunchApp] = useState(false);

  useEffect(() => {
    const firstTimeLaunchApp = async () => {
      try {
        const firstTimeLaunchApp = await AsyncStorage.getItem(
          'FIRST_TIME_LAUNCH_APP',
        );
        if (firstTimeLaunchApp === null) {
          setIsFirstTimeLaunchApp(true);
          await AsyncStorage.setItem('FIRST_TIME_LAUNCH_APP', 'false');
        }
      } catch (error) {
        console.log(
          'screens/Home.tsx line no. 51 error occured  in first time launch async storage ',
          error,
        );
      }
    };
    firstTimeLaunchApp();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isLoading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isFirstTimeLaunchApp && (
          <RootStack.Screen
            name="OnBoarding"
            component={IntroductionAnimationScreen}
            options={{headerShown: false}}
          />
        )}
        <RootStack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Logon"
          component={SignUp}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <RootStack.Screen
          name="Login"
          component={SignIn}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <RootStack.Screen
          name="OtpVerification"
          component={OtpVerification}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <RootStack.Screen
          name="WatchList"
          component={WatchList}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <RootStack.Screen
          name="Tv Detail"
          component={TvDetails}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Subscription"
          component={Subscription}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="WatchNow"
          component={WatchNow}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
