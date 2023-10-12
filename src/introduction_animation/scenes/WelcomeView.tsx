import React, {useRef} from 'react';
import {StyleSheet, Text, Animated, useWindowDimensions} from 'react-native';
import {AppImages} from '../../assets';
import LottieView from 'lottie-react-native';
interface Props {
  animationController: React.MutableRefObject<Animated.Value>;
}

const IMAGE_WIDTH = 350;
const IMAGE_HEIGHT = 350;

const WelcomeView: React.FC<Props> = ({animationController}) => {
  const window = useWindowDimensions();

  const careRef = useRef<Text | null>(null);

  const slideAnim = animationController.current.interpolate({
    inputRange: [0, 0.6, 0.8],
    outputRange: [window.width, window.width, 0],
  });

  const textEndVal = 26 * 2; // 26 being text's height (font size)
  const welcomeTextAnim = animationController.current.interpolate({
    inputRange: [0, 0.6, 0.8],
    outputRange: [textEndVal, textEndVal, 0],
  });

  const imageEndVal = IMAGE_WIDTH * 4;
  const imageAnim = animationController.current.interpolate({
    inputRange: [0, 0.6, 0.8],
    outputRange: [imageEndVal, imageEndVal, 0],
  });

  return (
    <Animated.View
      style={[styles.container, {transform: [{translateX: slideAnim}]}]}>
      <Animated.Text
        style={[styles.title, {transform: [{translateX: welcomeTextAnim}]}]}
        ref={careRef}>
        Unlock a World of Movies {'\n'} Sign Up Now!
      </Animated.Text>
      <Animated.View className={'h-60 w-full'}>
        <LottieView
          source={require('../../assets/lottie/onboarding_5.json')}
          autoPlay
          loop={true}
        />
      </Animated.View>

      <Text style={styles.subtitle}>
        Join our movie-loving community for exclusive content, personalized
        recommendations, and unforgettable cinematic experiences.
      </Text>
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
  image: {
    maxWidth: IMAGE_WIDTH,
    maxHeight: IMAGE_HEIGHT,
  },
  title: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'WorkSans-Bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    paddingHorizontal: 64,
    paddingVertical: 16,
  },
});

export default WelcomeView;
