import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const FallingStars = () => {
  const stars = Array.from({ length: 10 }, () => ({
    translateY: useRef(new Animated.Value(0)).current,
    translateX: Math.random() * width,
    delay: Math.random() * 2000,
  }));

  useEffect(() => {
    stars.forEach(star => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(star.translateY, {
            toValue: 800,
            duration: 4000,
            delay: star.delay,
            useNativeDriver: true,
          }),
          Animated.timing(star.translateY, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    });
  }, []);

  return (
    <View style={styles.container}>
      {stars.map((star, index) => (
        <Animated.Text
          key={index}
          style={[
            styles.star,
            {
              transform: [
                { translateY: star.translateY },
                { translateX: new Animated.Value(star.translateX) },
              ],
            },
          ]}>
          ⭐
        </Animated.Text>
      ))}
    </View>
  );
};

export default FallingStars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f3f',
  },
  star: {
    position: 'absolute',
    fontSize: 24,
  },
});
