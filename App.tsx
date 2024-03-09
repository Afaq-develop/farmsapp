import {View, Text} from 'react-native';
import React from 'react';

// navigator
import MainNavigator from './src/navigation/MainNavigator';
import Home from './src/screens/home/Home';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
  <MainNavigator />
   ) ;
}
