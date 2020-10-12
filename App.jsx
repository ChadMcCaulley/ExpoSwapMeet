import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, Text, TextInput, Button  } from 'react-native'
import { createSwitchNavigation } from 'react-navigation'
import * as firebase from 'firebase'
import 'firebase/firestore'
// import AppStyles from './AppStyles'
// import ChatScreen from './screens/ChatScreen'
// import LoginScreen from './screens/LoginScreen'
// import LoadingScreen from './screens/LoadingScreen'
import firebaseConfig from './firebase'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore()

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <View>
      <Text> Hello </Text>
    </View>
  )
}

// const AppSwitchNavigator = createSwitchNavigation.create({
//   LoadingScreen,
//   LoginScreen,
//   ChatScreen
// })
