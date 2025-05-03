import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const FadeInView = () => {
  const scale = useSharedValue(0.5);
  const rotate = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { rotate: `${rotate.value}deg` },
      ],
    };
  });

  useEffect(() => {
    scale.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });

    rotate.value = withTiming(360, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });
  }, []);

  return (
    <Animated.View style={[styles.box, animatedStyle]} />
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    alignSelf: 'center',
    marginTop: 100,
    borderRadius: 10,
  },
});

export default FadeInView;
