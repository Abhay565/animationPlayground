import React, { useRef } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const SlideInBox = () => {
  const slideAnim = useRef(new Animated.Value(-300)).current; // Start off-screen

  const slideIn = () => {
    slideAnim.setValue(-300);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ translateX: slideAnim }] }]} />
      <Button title="Slide In" onPress={slideIn} />
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
    width: 120,
    height: 120,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default SlideInBox;
