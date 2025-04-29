import React, { useRef } from 'react';
import { Animated, StyleSheet, View, Button } from 'react-native';

const ShakeBox = () => {
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const startShake = () => {
    shakeAnim.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ translateX: shakeAnim }] }]} />
      <Button title="Shake It!" onPress={startShake} />
    </View>
  );
};

export default ShakeBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: '#FF5722',
    borderRadius: 10,
    marginBottom: 20,
  },
});
