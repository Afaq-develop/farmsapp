import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Log from './Log';
import styles from './Styles';
import LogIn from '../logIn/LogIn';

const Settings = ({ navigation }) => {
  return (
    <View style={styles.mainview}>
      {/* Your Settings component UI here */}
      <Text>Settings Screen</Text>

      {/* About Us */}
      <TouchableOpacity onPress={() => navigation.navigate('Aboutus')}>
        <View style={styles.view}>
          <Image
            source={require('../../assets/images/aboutus.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.text}>About Us</Text>
        </View>
      </TouchableOpacity>

      {/* Contact Us */}
      <TouchableOpacity onPress={() => navigation.navigate('Contactus')}>
        <View style={styles.view}>
          <Image
            source={require('../../assets/images/contact.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.text}>Contact Us</Text>
        </View>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
        <View style={styles.view}>
          <Image
            source={require('../../assets/images/logout.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.text}>Log Out</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

export default Settings;
