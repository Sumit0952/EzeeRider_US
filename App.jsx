import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './src/screens/Home';
import Favorites from './src/screens/Favorites';
import { enableScreens } from 'react-native-screens';
import CustomDrawerContent from './src/components/CustomDrawerContent';
import Header from './src/components/Header'; // Imported the Header component
import Home from './src/screens/Home';
import DrawerNavigation from './src/navigation/DrawerNavigation';


enableScreens();

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
