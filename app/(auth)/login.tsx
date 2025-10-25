import { Link, router } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function login() {
  return (
    <View>
      <Text>login</Text>
      <Link href="/register">Create A Account</Link>
      <Button title='Login' onPress={()=>router.replace("/profile")}></Button>
    </View>
  )
}
