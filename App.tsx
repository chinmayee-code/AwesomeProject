import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'

export default function App() {
  return (
    <View style={styles.App}>
      {
        <Login /> ? <Login /> : <Signup />
      }
    </View>
    
  )
}

const styles = StyleSheet.create({
  App:{
    flex:1,
    backgroundColor:'#FFF',
  }
})