import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const TypingEffect = () => {
  const text = "Hello, welcome to the typing effect animation!";
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 150; // Speed of typing in ms

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayedText}</Text>
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
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
});

export default TypingEffect;
