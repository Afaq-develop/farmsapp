import { Image, StyleSheet, Text, TouchableOpacity, View , TextInput, Alert} from 'react-native'
import React, {useState} from 'react'
import { StackActions, useNavigation } from '@react-navigation/native'
import styles from './styles'
import auth from '@react-native-firebase/auth'; 
import Home from '../home/Home';


const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail]= useState('');
  const[password, setPassword]= useState('');
  const[meassage, setmeassage]= useState('');

  const handleSignUnNavigation=() =>{
    navigation.navigate('SignUp');
  };

  const handlelogin= async()=>{
    try {
      if(email.length >0 && password.length >0){
      const isUserLogin = await auth().signInWithEmailAndPassword(email, password);
      setmeassage('');
      console.log(isUserLogin);

      navigation.dispatch(StackActions.replace('Home'));
    }
    else {
      Alert("Please Enter All Data");
    }
    

    } catch (err) {
      console.log(err);
      setmeassage(err.meassage);
    }
  };

  return (
    <View style={styles.container}>
       

    <View>
    <View>
         <Image source={require('../../assets/images/logo.png')}
         style={styles.logo}/>
     </View>
     <View style={styles.flex}>
         <Text style={styles.urtext}> YOUR </Text>
         <Text style={styles.frtext}>FARMS</Text>
     
     </View>
     <Text style={styles.ustext}>Secured by USKTIANS</Text>
    </View>

   

    <View style={styles.box}>
      <Image source={require('../../assets/images/emailicon.png')}
      style={styles.icon}/>
       <TextInput
 style={styles.input}
 placeholder="Enter Email"
 placeholderTextColor="#484848"
 value={email}
    onChangeText={(text)=>setEmail(text)}
/>
    </View>
    <View style={styles.box}>
      <Image source={require('../../assets/images/lockicon.png')}
      style={styles.icon}/>
       <TextInput
 style={styles.input}
 placeholder="Enter Password"
 placeholderTextColor="#484848"
 value={password}
    onChangeText={(text)=>setPassword(text)}
    secureTextEntry={true}
/>
    </View>
     <View style={styles.upbtnview}>
     <TouchableOpacity style={styles.signupbtn} onPress={handlelogin}>
      <Text style={styles.btntext}>Login</Text>
     </TouchableOpacity>
     </View>
     <TouchableOpacity style={styles.forgetview}>
      <Text style={[styles.havetext, {color:'#FFF'}]}>Forgot Password?</Text>
      </TouchableOpacity> 

     <View style={[styles.flex,{marginTop:90}]}>
       <Text style={[styles.havetext,{ color:'#FFF'}]}>Don't have an Account?</Text>
       <TouchableOpacity>
         <Text style={[styles.havetext,{color:'#008DC9'}]} onPress={handleSignUnNavigation}> Signup Here</Text>
       </TouchableOpacity>
     </View>
 </View>
  )
}

export default LogIn;