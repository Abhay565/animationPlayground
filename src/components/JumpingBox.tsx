import React, { useRef } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const JumpingBox = () => {
  const jumpAnim = useRef(new Animated.Value(0)).current;

  const jump = () => {
    jumpAnim.setValue(0);
    Animated.sequence([
      Animated.timing(jumpAnim, {
        toValue: -150,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(jumpAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ translateY: jumpAnim }] }]} />
      <Button title="Jump!" onPress={jump} />
    </View>
  );
};

export default JumpingBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#FF5722',
    borderRadius: 12,
    marginBottom: 20,
  },
});
