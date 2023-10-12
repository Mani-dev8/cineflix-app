import React, { useRef } from 'react';
import { StyleSheet, Text, Animated, useWindowDimensions } from 'react-native';
import { AppImages } from '../../assets';
import { LogoSvgComponent } from '../../assets/icons/Svg';
import LottieView from 'lottie-react-native';
interface Props {
  animationController: React.MutableRefObject<Animated.Value>;
}

const IMAGE_WIDTH = 350;
const IMAGE_HEIGHT = 250;

const MoodDiaryView: React.FC<Props> = ({ animationController }) => {
  const window = useWindowDimensions();

  const careRef = useRef<Text | null>(null);

  const slideAnim = animationController.current.interpolate({
    inputRange: [0, 0.4, 0.6, 0.8],
    outputRange: [window.width, window.width, 0, -window.width],
  });

  const textEndVal = window.width * 2; // 26 being text's height (font size)
  const textAnim = animationController.current.interpolate({
    inputRange: [0, 0.4, 0.6, 0.8],
    outputRange: [textEndVal, textEndVal, 0, -textEndVal],
  });

  const imageEndVal = IMAGE_WIDTH * 4;
  const imageAnim = animationController.current.interpolate({
    inputRange: [0, 0.4, 0.6, 0.8],
    outputRange: [imageEndVal, imageEndVal, 0, -imageEndVal],
  });

  return (
    <Animated.View
      style={[styles.container, {transform: [{translateX: slideAnim}]}]}>
      <LogoSvgComponent class="h-10 w-10 mb-8" />
      <Text style={styles.title} ref={careRef}>
        Create Your Watchlist{'\n'}and Stay Updated.
      </Text>
      <Animated.View className={'h-60 w-full'}>
        <LottieView source={require('../../assets/lottie/onboarding_4.json')} autoPlay loop/>
      </Animated.View>
      <Animated.Text
        style={[styles.subtitle, {transform: [{translateX: textAnim}]}]}>
        Stay up-to-date with a personalized watchlist for all your favorite
        movies and more.
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'WorkSans-Bold',
    marginBottom:12
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    paddingHorizontal: 64,
    paddingVertical: 16,
  },
  image: {
    maxWidth: IMAGE_WIDTH,
    maxHeight: IMAGE_HEIGHT,
  },
});

export default MoodDiaryView;
