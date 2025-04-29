import React, { useRef } from 'react';
import { Animated, View, Button, StyleSheet } from 'react-native';

const ScaleBox = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const scaleUp = () => {
    Animated.timing(scaleAnim, {
      toValue: 1.5,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const scaleDown = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ scale: scaleAnim }] }]} />
      <Button title="Scale Up" onPress={scaleUp} />
      <Button title="Scale Down" onPress={scaleDown} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'purple',
    marginBottom: 20,
    borderRadius: 12,
  },
});

export default ScaleBox;
