import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/components/Header'

const App = () => {
  return (
    <View style = {styles.container}>
      <Header/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  }
})