import React, { useRef } from 'react';
import { Animated, View, Button, StyleSheet } from 'react-native';

const BouncingBall = () => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  const bounce = () => {
    bounceAnim.setValue(0); // Start from top
  
    Animated.sequence([
      Animated.spring(bounceAnim, {
        toValue: 1,
        friction: 2,
        tension: 100,
        useNativeDriver: true,
      }),
      Animated.spring(bounceAnim, {
        toValue: 0,
        friction: 3,
        tension: 80,
        useNativeDriver: true,
      }),
    ]).start();
  };
  

  const translateY = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300], // From top to bottom
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, { transform: [{ translateY }] }]} />
      <Button title="Bounce!" onPress={bounce} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#f0f0f0',
  },
  ball: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'orange',
    marginBottom: 20,
  },
});

export default BouncingBall;
