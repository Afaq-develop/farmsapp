import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import Setting from '../setting/Setting';
import Notifications from '../Notifications/Notifications';
import Media from '../media/Media';
import styles from './Styles';

const Tab = createBottomTabNavigator();

const Home = () => {
  const tabColor = '#F34E3A'; // Set your desired color

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#222529' },
        tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', color: tabColor },
        tabBarIconStyle: { color: tabColor },
        tabBarItemStyle: { color: tabColor },
      }}
    >
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Image
                source={require('../../assets/images/notifi.png')}
              
                style={[styles.tab, { tintColor: color }]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Media"
        component={Media}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Image
                source={require('../../assets/images/media.png')}
               
                style={[styles.tab, { tintColor: color }]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Image
                source={require('../../assets/images/settings.png')}
                style={[styles.tab, { tintColor: color }]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
