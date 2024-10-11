import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home.jsx';
import DropLocationScreen from '../screens/DropLocation.jsx';
import ChooseLocation from '../screens/ChooseLocation.js';
import Settings from '../screens/Settings.jsx';
import Preferences from '../screens/Preferences.jsx';
import About from '../screens/About.jsx';
import Favorites from '../screens/Favorites.jsx';
import Profile from '../screens/Profile.jsx';
import EmerContact from '../screens/EmergencyContact.jsx';
import Payments from '../screens/Payments.jsx';
import Refer from '../screens/Refer.jsx';
import HelpScreen from '../screens/Help.jsx';


const Stack = createNativeStackNavigator();


const StackNavigation = () => {
  return (
    
      <Stack.Navigator
          initialRouteName='HOME'
          screenOptions={{headerShown: true}}>
              <Stack.Screen name="HOME" component={Home}  options={{headerShown: false}} />
              <Stack.Screen name="DropLocation" component={DropLocationScreen}  options={{headerShown: true}}/>
              <Stack.Screen name="CHOOSE" component={ChooseLocation}  options={{headerShown: true}}/>
              <Stack.Screen name="Settings" component={Settings}  options={{headerShown: true}}/>
              <Stack.Screen name="Preferences" component={Preferences}  options={{headerShown: true}}/>
              <Stack.Screen name="About" component={About}  options={{headerShown: true}}/>
              <Stack.Screen name="Favorites" component={Favorites}  options={{headerShown: true}}/>
              <Stack.Screen name="Profile" component={Profile}  options={{headerShown: true}}/>
              <Stack.Screen name="EmerContact" component={EmerContact}  options={{headerShown: true}}/>
              <Stack.Screen name="Payment" component={Payments}  options={{headerShown: true}}/>
              <Stack.Screen name="Refer" component={Refer}  options={{headerShown: true}}/>
              <Stack.Screen name="HelpScreen" component={HelpScreen}  options={{headerShown: true}}/>
              
        </Stack.Navigator>
  
  );
};
export default StackNavigation

const styles = StyleSheet.create({})