import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, Text, TextInput, Button  } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import * as firebase from 'firebase'
import 'firebase/firestore'
import AppStyles from './AppStyles'
import LoginScreen from './screens/LoginScreen'
import LoadingScreen from './screens/LoadingScreen'
import { firebaseConfig } from './config'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore()

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen,
  LoginScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator) 

export default function App() {
  const [user, setUser] = useState(null)

  return <AppNavigator />
}
