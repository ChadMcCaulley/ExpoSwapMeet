import React, { useState } from 'react'
import { StyleSheet, View, Text, ActivityIndicator  } from 'react-native'
import AppStyles from '../AppStyles'

export default function LoginScreen() {
  return (
    <View style={AppStyles.container}>
      <ActivityIndicator size="large" color="#0000ff"/>
    </View>
  )
}

const styles = StyleSheet.create({
});
