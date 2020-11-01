import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import Heroes from './Heroes';
import QrCode from './QrCode';
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: { fontSize: 18, fontFamily: 'MarvelRegular-Dj83' },
          style: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="Heroes"
          component={Heroes}
          options={{ tabBarLabel: 'Super-heróis' }}
        />

        <Tab.Screen
          name="QR Scanner"
          component={QrCode}
          options={{ tabBarLabel: 'QRCode' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// fontFamily: 'MarvelRegular-Dj83'
