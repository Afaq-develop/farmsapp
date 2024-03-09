import { Image, StyleSheet, Text, TouchableOpacity, View , TextInput, Alert} from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import LogIn from '../logIn/LogIn'
import auth from '@react-native-firebase/auth'; 

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail]= useState('');
  const[password, setPassword]= useState('');
  const[username, setUsername]=useState('');
  const[meassage, setmeassage]= useState('');

  const handleLoginNavigation=() =>{
    navigation.navigate('LogIn');
  };
  const handlesignup= async()=>{
    try {
      if(email.length >0 && password.length >0){
       const isUserCreated = await auth().createUserWithEmailAndPassword(
        email, 
        password,
        );
      await auth().signOut();

      navigation.navigate('LogIn');

      const user = auth().currentUser;
      await user.updateProfile({
        displayName: username,
      });
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
  <Image source={require('../../assets/images/user.png')} style={styles.icon} />
  <TextInput
    style={styles.input}
    placeholder="Enter Username"
    placeholderTextColor="#484848"
    value={username}
    onChangeText={(Text)=>setUsername(Text)}
  />
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
        <TouchableOpacity style={styles.signupbtn} onPress={handlesignup}>
         <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
        </View>

        <View style={[styles.flex,{marginTop:90}]}>
          <Text style={[styles.havetext,{ color:'#FFF'}]}>Have an Account?</Text>
          <TouchableOpacity onPress={handleLoginNavigation}>
            <Text style={[styles.havetext,{color:'#008DC9'}]}> Login Here</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default SignUp;

