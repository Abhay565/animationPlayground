import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, Button } from 'react-native';

const PulseCircle = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const pulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, { transform: [{ scale: scaleAnim }] }]} />
      <Button title="Start Pulse" onPress={pulse} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff3e0',
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: '#f44336',
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default PulseCircle;
