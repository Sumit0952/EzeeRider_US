import 'react-native-gesture-handler';

import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from './src/components/Header'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './src/screens/Settings';
import Favorites from './src/screens/Favorites';
import { enableScreens } from 'react-native-screens';

const Drawer = createDrawerNavigator();
enableScreens();
const App = () => {
  return <NavigationContainer>
      <View style={styles.container}>
        {/* Add Header here */}
        <Header />
        <Drawer.Navigator>
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="Favorites" component={Favorites} />
        </Drawer.Navigator>
      </View>
    </NavigationContainer>
  
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
