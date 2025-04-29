import React, { useRef } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const ColorFadeBox = () => {
  const colorAnim = useRef(new Animated.Value(0)).current;

  const animateColor = () => {
    Animated.sequence([
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(colorAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,99,71)', 'rgb(30,144,255)'], // tomato to dodgerblue
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { backgroundColor }]} />
      <Button title="Animate Color" onPress={animateColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginBottom: 20,
  },
});

export default ColorFadeBox;
