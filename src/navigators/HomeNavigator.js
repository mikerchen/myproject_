import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FilmScreen from '../screens/FilmScreen';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';
import myImage from '../screens/MyImage';

const HomeStack = createStackNavigator()

function HomeScrenStack({}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen}></HomeStack.Screen>
      <HomeStack.Screen name='Film' component={FilmScreen}></HomeStack.Screen>
      <HomeStack.Screen name='Image' component={ImageScreen}></HomeStack.Screen>
      <HomeStack.Screen name='MyImage' component={myImage}></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

export default HomeScrenStack;