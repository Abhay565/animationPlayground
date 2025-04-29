import React, { useRef } from 'react';
import { Animated, StyleSheet, View, Button } from 'react-native';

const RippleEffect = () => {
  const rippleAnim = useRef(new Animated.Value(0)).current;

  const startRipple = () => {
    rippleAnim.setValue(0);
    Animated.timing(rippleAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  };

  const rippleScale = rippleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 4], // Grows 4x bigger
  });

  const rippleOpacity = rippleAnim.interpolate({
    inputRange: [0, 0.7, 1],
    outputRange: [1, 0.5, 0], // Fades out as it expands
  });

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Animated.View
          style={[
            styles.ripple,
            {
              transform: [{ scale: rippleScale }],
              opacity: rippleOpacity,
            },
          ]}
        />
        <View style={styles.innerCircle} />
      </View>
      <Button title="Start Ripple" onPress={startRipple} />
    </View>
  );
};

export default RippleEffect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  ripple: {
    width: 100,
    height: 100,
    backgroundColor: '#4FC3F7',
    position: 'absolute',
    borderRadius: 50,
  },
  innerCircle: {
    width: 30,
    height: 30,
    backgroundColor: '#0288D1',
    borderRadius: 15,
  },
});
