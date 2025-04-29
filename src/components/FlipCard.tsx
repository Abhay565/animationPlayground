import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FlipCard = () => {
  const flipAnim = useRef(new Animated.Value(0)).current;
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    if (flipped) {
      Animated.timing(flipAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => setFlipped(false));
    } else {
      Animated.timing(flipAnim, {
        toValue: 180,
        duration: 800,
        useNativeDriver: true,
      }).start(() => setFlipped(true));
    }
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
    position: 'absolute',
    top: 0,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={flipCard}>
        <View>
          <Animated.View style={[styles.card, frontAnimatedStyle]}>
            <Text style={styles.text}>Front</Text>
          </Animated.View>
          <Animated.View style={[styles.card, styles.back, backAnimatedStyle]}>
            <Text style={styles.text}>Back</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FlipCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 200,
    height: 120,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    borderRadius: 10,
  },
  back: {
    backgroundColor: '#FF5722',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
