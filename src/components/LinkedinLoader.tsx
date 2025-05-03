import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  Easing,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const LinkedinLoader = () => {
  const shimmerTranslate = useSharedValue(-width);

  useEffect(() => {
    shimmerTranslate.value = withRepeat(
      withTiming(width, {
        duration: 1500,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shimmerTranslate.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.loaderContent}>
        <View style={styles.lodaerContainer}>
          <View style={styles.circle} />
          <View style={styles.lineConatiner}>
            <View style={[styles.line, { width: 150 }]} />
            <View style={styles.line} />
            <View style={[styles.line, { width: 120 }]} />
          </View>
        </View>

        <View style={styles.descripContainer}>
          <View style={styles.line2} />
          <View style={[styles.line2, { width: 280 }]} />
          <View style={styles.line2} />
          <View style={[styles.line2, { width: 220 }]} />
        </View>

        <View style={[styles.fotterLodaer, { justifyContent: 'space-between' }]}>
          <View style={styles.fotterLodaer}>
            <View style={styles.smallCircle} />
            <View style={styles.smallCircle} />
            <View style={styles.smallCircle} />
            <View style={[styles.line, { width: 60 }]} />
          </View>
          <View style={[styles.line, { width: 80 }]} />
        </View>

        {/* Shimmer overlay */}
        <Animated.View style={[styles.shimmerOverlay, animatedStyle]}>
          <LinearGradient
            colors={['transparent', 'rgba(255,255,255,0.3)', 'transparent']}
            style={styles.linearGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default LinkedinLoader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#222',
    flex: 1,
  },
  loaderContent: {
    backgroundColor: 'rgba(255,255,255,.1)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    overflow: 'hidden', // important for shimmer
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
  shimmerOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 150,
  },
  linearGradient: {
    flex: 1,
  },
});
