import React, { useState } from 'react';
import { Animated, View, StyleSheet, TouchableOpacity } from 'react-native';

const ExplosionBox = () => {
  const [exploded, setExploded] = useState(false);
  
  // Function to trigger explosion effect
  const triggerExplosion = () => {
    setExploded(false); // Reset the explosion to re-trigger it
    setTimeout(() => setExploded(true), 50); // Set a small delay before triggering the animation again
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.triggerButton} onPress={triggerExplosion}>
        <View style={styles.explosion}>
          <Animated.View
            style={[
              styles.explosionInner,
            ]}
          />
        </View>
      </TouchableOpacity>

      {exploded && (
        <View style={styles.explosionWrapper}>
          {/* Dynamically generate cracker effects */}
          {Array.from({ length: 5 }).map((_, index) => {
            const positionAnim = new Animated.ValueXY({ x: Math.random() * 200 - 100, y: Math.random() * 200 - 100 });
            const sizeAnim = new Animated.Value(1);
            const opacityAnim = new Animated.Value(1);

            Animated.sequence([
              Animated.timing(sizeAnim, {
                toValue: Math.random() * 2 + 1, // Random size for different cracker sizes
                duration: 500,
                useNativeDriver: false,
              }),
              Animated.timing(opacityAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
              })
            ]).start();

            return (
              <Animated.View
                key={index}
                style={[
                  styles.cracker,
                  {
                    transform: [
                      { translateX: positionAnim.x },
                      { translateY: positionAnim.y },
                      { scale: sizeAnim },
                    ],
                    opacity: opacityAnim,
                  },
                ]}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  triggerButton: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  explosionWrapper: {
    position: 'absolute',
    top: '30%',
    left: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  explosion: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'orange',
  },
  explosionInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'orange',
  },
  cracker: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    position: 'absolute',
  },
});

export default ExplosionBox;
