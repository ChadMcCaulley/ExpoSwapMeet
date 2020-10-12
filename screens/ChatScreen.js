import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, TextInput, Button  } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-community/async-storage'
import firebase from '../dbConfig'
import AppStyles from '../AppStyles'

const db = firebase.firestore()
const chatsRef = db.collection('chats')

export default function ChatScreen() {
  const [user, setUser] = useState(null)
  const [name, setName] = useState(null)
  const [messages, setMessages] = useState([])
  useEffect(() => {
    readUser()
    const unsubscribe = chatsRef.onSnapshot(querySnapShot => {
      const messagesFirestore = querySnapShot
        .docChanges()
        .filter(({ type }) => type === 'added')
        .map(({ doc }) => {
          const message = doc.data()
          return {...message, createdAt: message.createdAt.toDate() }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      appendMessages(messagesFirestore)
    })
    return () => unsubscribe()
  }, [])

  const appendMessages = useCallback(messages => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, messages) )
  }, [])

  async function readUser () {
    const user = await AsyncStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }

  async function handlePress () {
    const _id = Math.random().toString(36).substring(7)
    const user = {
      _id,
      name
    }
    await AsyncStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  async function handleSend (messages) {
    const writes = messages.map(m => chatsRef.add(m))
    await Promise.all(writes)
  }

  if (user) {
    return (
      <GiftedChat messages={messages} user={user} onSend={handleSend} />
    );
  }
  return (
    <View style={AppStyles.container}>
      <TextInput style={AppStyles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
      <Button onPress={handlePress} title="Enter the chat" />
    </View>
  )
}
