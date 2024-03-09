import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';


export default function SplashScreen() {
  //
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
     const unsubscribe= Auth().onAuthStateChanged(user => {
        const routeName = user !== null ? 'Home' : 'LogIn';

        navigation.dispatch(StackActions.replace(routeName));
      });
      unsubscribe();
    }, 3000);

    return () => {};
  }, []);

  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color:'blue', fontSize:50}}>SplashScreen</Text>
    </View>
  );
}
