import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ScaleBox from './src/components/ScaleBox';
import BouncingBall from './src/components/Bouncing';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Index from './src/components/Index';

import SpinningBox from './src/components/SpinningBox';
import PulseCircle from './src/components/PulseCircle';
import SlideInBox from './src/components/SlideInBox';
import Fade from './src/components/Fade';
import ColorFadeBox from './src/components/ColorFadeBox';
import FlipCard from './src/components/FlipCard';
import WobbleBox from './src/components/WobbleBox';
import JumpingBox from './src/components/JumpingBox';
import BreathingCircle from './src/components/BreathingCircle';
import RippleEffect from './src/components/RippleEffect';
import ShakeBox from './src/components/ShakeBox';
import ParallaxScroll from './src/components/ParallaxScroll';
import FallingStars from './src/components/FallingStars';
import TypingEffect from './src/components/TypingEffect';
import ExplosionBox from './src/components/ExplosionBox';
import LoadingDots from './src/components/LoadingDots';
import FadeInView from './src/components/FadeInView';
import WaveMotionBox from './src/components/WaveMotionBox';
import SkeletonLoader from './src/components/SkeletonLoader';
import LinkedinLoader from './src/components/LinkedinLoader';
import LinkedinSkeleton from './src/components/LinkIdinSkeleton';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name='Index' component={Index} options={{headerShown: false}} />
        <Stack.Screen name="Fade" component={Fade} />
        <Stack.Screen name="ScaleBox" component={ScaleBox} />
        <Stack.Screen name="BouncingBall" component={BouncingBall} />
        <Stack.Screen name='SpinningBox' component={SpinningBox} />
        <Stack.Screen name='PulseCircle' component={PulseCircle} />
        <Stack.Screen name='SlideInBox' component={SlideInBox} />
        <Stack.Screen name='ColorFadeBox' component={ColorFadeBox}/>
        <Stack.Screen name='FlipCard' component={FlipCard} />
        <Stack.Screen name='WobbleBox' component={WobbleBox} />
        <Stack.Screen name='JumpingBox' component={JumpingBox}/>
        <Stack.Screen name='BreathingCircle' component={BreathingCircle}/>
        <Stack.Screen name='RippleEffect' component={RippleEffect} />
        <Stack.Screen name='ShakeBox' component={ShakeBox} />
        <Stack.Screen name='ParallaxScroll' component={ParallaxScroll} />
        <Stack.Screen name='FallingStars' component={FallingStars} />
        <Stack.Screen name='TypingEffect' component={TypingEffect}/>
        <Stack.Screen name='ExplosionBox' component={ExplosionBox}/>
        <Stack.Screen name='LoadingDots' component={LoadingDots} />
        <Stack.Screen name='FadeInView' component={FadeInView} />
        <Stack.Screen name='WaveMotionBox' component={WaveMotionBox} />
        <Stack.Screen  name='SkeletonLoader' component={SkeletonLoader} />
        <Stack.Screen name='LinkedinLoader' component={LinkedinLoader} />
        <Stack.Screen name='LinkedinSkeleton' component={LinkedinSkeleton} />
       </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;
