import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const WaveMotionBox = () => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(
      withTiming(-20, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      }),
      -1, // infinite
      true // reverse
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return <Animated.View style={[styles.box, animatedStyle]} />;
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#4f83cc',
    alignSelf: 'center',
    marginTop: 150,
    borderRadius: 12,
  },
});

export default WaveMotionBox;
