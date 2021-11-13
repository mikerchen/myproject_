import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import DT from './darkTheme'
import myDarkTheme from './darkTheme'
import Film from './src/components/FilmComponent'
import HomeScrenStack from './src/navigators/HomeNavigator'

function App() {
  const scheme = useColorScheme()
  const MyDarkTheme = DT()

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
      <HomeScrenStack />
    </NavigationContainer>
  )
}

export default App
