import * as Google from 'expo-google-app-auth'
import React from 'react'
import { StyleSheet, View, Text  } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import AppStyles from '../AppStyles'
import firebase from '../dbConfig'


export default function LoginScreen({ navigation }) {
  const onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser)
    var unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      unsubscribe()
      if (!isUserEqual(googleUser, firebaseUser)) {
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        )
        firebase.auth().signInWithCredential(credential)
          .then(() => console.log('User signed in'))
          .catch(error => {
            var errorCode = error.code
            var errorMessage = error.message
            var email = error.email
            var credential = error.credential

          })
      } else {
        console.log('User already signed-in Firebase.')
      }
    })
  }

  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          return true
        }
      }
    }
    return false
  }

  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: process.env.EXPO_GOOGLE_AUTH_ANDROID_ID,
        iosClientId: process.env.EXPO_GOOGLE_AUTH_IOS_ID,
        scopes: ['profile', 'email'],
      })
      if (result.type === 'success') onSignIn(result)
      else console.log('cancelled')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={AppStyles.container}>
      <FontAwesome.Button
        size={40}
        iconStyle={{margin: 10}}
        borderRadius={20}
        name="google"
        onPress={signInWithGoogle}
      />
    </View>
  )
}
