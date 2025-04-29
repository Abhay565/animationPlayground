import React, { useRef } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const WobbleBox = () => {
  const wobbleAnim = useRef(new Animated.Value(0)).current;

  const wobble = () => {
    wobbleAnim.setValue(0);
    Animated.sequence([
      Animated.timing(wobbleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(wobbleAnim, {
        toValue: -1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(wobbleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(wobbleAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotate = wobbleAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-10deg', '10deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ rotate }] }]} />
      <Button title="Wobble!" onPress={wobble} />
    </View>
  );
};

export default WobbleBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#673AB7',
    borderRadius: 8,
    marginBottom: 20,
  },
});
