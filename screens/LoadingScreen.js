import React, { useEffect } from 'react'
import { StyleSheet, View, Text, ActivityIndicator  } from 'react-native'
import AppStyles from '../AppStyles'
import firebase from '../dbConfig'

export default function LoadingScreen({ navigation }) {
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) navigation.navigate('Chat')
      else navigation.navigate('Login')
    })
  }

  useEffect(checkIfLoggedIn)

  return (
    <View style={AppStyles.container}>
      <ActivityIndicator size="large" color="#0000ff"/>
    </View>
  )
}
