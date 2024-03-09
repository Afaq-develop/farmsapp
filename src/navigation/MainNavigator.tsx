import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from '../screens/signUp/SignUp';
import LogIn from '../screens/logIn/LogIn';
import Home from '../screens/home/Home';
import SplashScreen from '../screens/splash/Splash';
import Aboutus from '../screens/setting/Aboutus';
import Contactus from '../screens/setting/Contactus';
import Log from '../screens/setting/Log';


const Stack = createNativeStackNavigator();


const MainNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LogIn'>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Aboutus' component={Aboutus} />
        <Stack.Screen name='Contactus' component={Contactus} />
        <Stack.Screen name='Logout' component={Log} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
