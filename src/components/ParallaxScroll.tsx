import React, { useRef } from 'react';
import { Animated, StyleSheet, View, Image, Text, ScrollView, Dimensions } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const ParallaxScroll = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [300, 100],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
        style={[styles.header, { height: headerHeight }]}
        resizeMode="cover"
      />
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingTop: 300 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.content}>
          <Text style={styles.text}>
            Parallax effect while scrolling! 🚀
          </Text>
          <Text style={styles.text}>
            Scroll down to see the header shrink!
          </Text>
          <Text style={styles.text}>
            Beautiful, smooth animation.
          </Text>
          {/* Add more content if you want */}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default ParallaxScroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    minHeight: SCREEN_HEIGHT,
  },
  text: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
});
