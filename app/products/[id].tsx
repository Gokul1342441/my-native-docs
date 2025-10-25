import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
export default function ProductDetails() {
  const { id } = useLocalSearchParams()
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>ProductDetails {id}</Text>
    </View>
  )
}