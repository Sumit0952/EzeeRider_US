import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomDrawerContent from '../components/CustomDrawerContent';
import StackNavigation from './StackNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from '../screens/Favorites';
import Header from '../components/Header';
const Drawer = createDrawerNavigator();

const { width } = Dimensions.get('window');

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
        screenOptions={{
          headerShown: false, // Allow headers to be shown
          drawerType: 'slide',
          drawerStyle: {
            width: width, 
            // Full width of the screen
        },
        
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={StackNavigation}
          
        />
        <Drawer.Screen
          name="Favorites"
          component={Favorites}
          options={{
            header: () => <Header />, // Use Header for this screen
          }}
        />
      </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})