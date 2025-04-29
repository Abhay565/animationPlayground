import React, { useState, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const LoadingDots = () => {
  const [dot1, setDot1] = useState(new Animated.Value(0));
  const [dot2, setDot2] = useState(new Animated.Value(0));
  const [dot3, setDot3] = useState(new Animated.Value(0));

  const animateDots = (dot, delay) => {
    Animated.sequence([
      Animated.timing(dot, {
        toValue: 1,
        duration: 500,
        delay: delay,
        useNativeDriver: true,
      }),
      Animated.timing(dot, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => animateDots(dot, delay)); // Restart the animation in loop
  };

  useEffect(() => {
    animateDots(dot1, 0);
    animateDots(dot2, 200); // Delay the second dot a bit
    animateDots(dot3, 400); // Delay the third dot a bit
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dotsContainer}>
        <Animated.View
          style={[
            styles.dot,
            {
              transform: [
                {
                  translateY: dot1.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -10], // Dots bounce up and down
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.dot,
            {
              transform: [
                {
                  translateY: dot2.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -10],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.dot,
            {
              transform: [
                {
                  translateY: dot3.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -10],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
});

export default LoadingDots;
