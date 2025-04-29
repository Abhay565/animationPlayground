import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  const data = [
    {id: 1, screenName: 'Fade'},
    {id: 2, screenName: 'ScaleBox'},
    {id: 3, screenName: 'BouncingBall'},
    {id: 4, screenName: 'SpinningBox'},
    {id: 5, screenName: 'PulseCircle'},
    {id: 6, screenName: 'SlideInBox'},
    {id: 7, screenName: 'ColorFadeBox'},
    {id: 9, screenName: 'FlipCard'},
    {id: 10, screenName: 'WobbleBox'},
    {id: 11, screenName: 'JumpingBox'},
    {id: 12, screenName: 'BreathingCircle'},
    {id: 13, screenName: 'RippleEffect'},
    {id: 14, screenName: 'ShakeBox'},
    {id: 15, screenName: 'ParallaxScroll'},
    {id: 16, screenName: 'FallingStars'},
    {id: 17, screenName: 'TypingEffect'},
    {id: 18, screenName: 'ExplosionBox'},
    {id:19, screenName:"LoadingDots"},
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.animationContainer}>
        <Text style={styles.animationText}>Animations Component</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          const isEven = index % 2 === 0;
          return (
            <View>
              <TouchableOpacity
                style={[
                  styles.touchable,
                  {alignSelf: isEven ? 'flex-start' : 'flex-end'},
                ]}
                onPress={() => navigation.navigate(item.screenName)}>
                <Text style={styles.item}>{item.screenName}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#222',
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  animationText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textDecorationLine: 'underline',
    paddingBottom: 12,
  },
  touchable: {
    backgroundColor: 'rgba(250,10,10,1)',
    width: '46%',
    marginVertical: 6,
    marginHorizontal: 10,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  item: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});
