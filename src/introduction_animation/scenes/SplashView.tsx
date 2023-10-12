import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MyPressable from '../../components/MyPressable';
import { AppImages } from '../../assets';
import LottieView from 'lottie-react-native';
import { IntroductionSvg } from '../../assets/splash/Svg';
import { LogoSvgComponent } from '../../assets/icons/Svg';

interface Props {
  onNextClick: () => void;
  animationController: React.MutableRefObject<Animated.Value>;
}

const SplashView: React.FC<Props> = ({ onNextClick, animationController }) => {
  const window = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const splashTranslateY = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.8],
    outputRange: [0, -window.height, -window.height],
  });

  const introImageData = Image.resolveAssetSource(AppImages.introduction_image);

  return (
    <Animated.View
      style={{flex: 1, transform: [{translateY: splashTranslateY}]}}>
      <ScrollView
        style={{flexGrow: 0}}
        alwaysBounceVertical={false}
        className="pt-20">
        <LogoSvgComponent class="h-10 mb-4" />
        <Text style={[styles.title, {lineHeight: 30}]}>CineFlix</Text>
        <View className="object-cover h-60 w-full">
          <LottieView
            source={require('../../assets/lottie/onboarding_1.json')}
            autoPlay
            loop
          />
        </View>
        <Text style={[styles.title, {lineHeight: 40, paddingBottom: 20,paddingHorizontal:60}]}>
          Explore, Discover, and Dive into the World of Movies
        </Text>
      </ScrollView>

      <View style={[styles.footer, {paddingBottom: 8 + insets.bottom}]}>
        <View style={styles.buttonContainer}>
          <MyPressable
            style={styles.button}
            android_ripple={{color: 'powderblue'}}
            touchOpacity={0.6}
            onPress={() => onNextClick()}>
            <Text style={styles.buttonText}>Let's begin</Text>
          </MyPressable>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'WorkSans-Bold',
    paddingVertical: 8,
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    paddingHorizontal: 24,
  },
  footer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: 8,
  },
  buttonContainer: {
    borderRadius: 38,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  button: {
    height: 58,
    backgroundColor: '#EF4444',
    paddingVertical: 16,
    paddingHorizontal: 56,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'WorkSans-Regular',
    color: 'white',
  },
});

export default SplashView;
