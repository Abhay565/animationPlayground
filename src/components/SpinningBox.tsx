import React, { useRef } from 'react';
import { Animated, View, Button, StyleSheet } from 'react-native';

const SpinningBox = () => {
  const spinAnim = useRef(new Animated.Value(0)).current;

  const spin = () => {
    spinAnim.setValue(0); // Reset
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const rotate = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ rotate }] }]} />
      <Button title="Spin!" onPress={spin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#00acc1',
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default SpinningBox;
