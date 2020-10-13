import Expo from 'expo'
import React from 'react'
import { StyleSheet, View, Text, Button  } from 'react-native'
import AppStyles from '../AppStyles'


export default function LoginScreen({ navigation }) {
  signInWithGoogle = async () => {
    console.log('HERE')
    console.log(process.env)
    try {
      const result = await Expo.Google.logInAsync({
        behavior: 'web',
        androidClientId: process.env.GOOGLE_AUTH_ANDROID_ID,
        iosClientId: process.env.GOOGLE_AUTH_IOS_ID,
        scopes: ['profile', 'email']
      })
      if (result.type === 'success') return result.accessToken
      return { cancelled: true }
    } catch (err) {
      return { error: true }
    }
  }

  return (
    <View style={AppStyles.container}>
      <Button title="Google" onPress={signInWithGoogle}/>
    </View>
  )
}
