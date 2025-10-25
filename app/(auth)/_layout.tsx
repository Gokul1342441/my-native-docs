import { Slot } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
export default function AuthLayout() {
  return (
    <View>
      <Text>AuthLayout</Text>
      <Slot />
    </View>
  )
}