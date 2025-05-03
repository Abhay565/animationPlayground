import {Dimensions, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const LinkedinSkeleton = () => {
  const pulse = useSharedValue(0.3); // Start at low opacity

  useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1, {
        duration: 800,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true, // reverse
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: pulse.value,
    };
  });

  return (
    <View style={styles.container}>
      {[1, 2,3].map(() => {
        return (
          <Animated.View style={[styles.loaderContent, animatedStyle]}>
            <View style={styles.lodaerContainer}>
              <View style={styles.circle} />
              <View style={styles.lineConatiner}>
                <View style={[styles.line, {width: 150}]} />
                <View style={styles.line} />
                <View style={[styles.line, {width: 120}]} />
              </View>
            </View>

            <View style={styles.descripContainer}>
              <View style={styles.line2} />
              <View style={[styles.line2, {width: 280}]} />
              <View style={styles.line2} />
              <View style={[styles.line2, {width: 220}]} />
            </View>

            <View
              style={[styles.fotterLodaer, {justifyContent: 'space-between'}]}>
              <View style={styles.fotterLodaer}>
                <View style={styles.smallCircle} />
                <View style={styles.smallCircle} />
                <View style={styles.smallCircle} />
                <View style={[styles.line, {width: 60}]} />
              </View>
              <View style={[styles.line, {width: 80}]} />
            </View>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default LinkedinSkeleton;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#222',
    flex: 1,
    // alignItems: 'center',
  },
  loaderContent: {
    backgroundColor: '#444', // Slightly dark to allow pulsing effect
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    marginVertical: 10,
  },
  lodaerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  lineConatiner: {
    gap: 5,
  },
  descripContainer: {
    marginVertical: 20,
    gap: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  fotterLodaer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#999',
  },
  smallCircle: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#999',
  },
  line: {
    width: width * 0.65,
    height: 12,
    backgroundColor: '#999',
    borderRadius: 20,
  },
  line2: {
    width: width * 0.82,
    height: 16,
    backgroundColor: '#999',
    borderRadius: 20,
  },
});
