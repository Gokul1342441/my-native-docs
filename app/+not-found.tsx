import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function notFound() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-[#000] mb-4">Page is not found!</Text>
      <Link href="/" className="text-blue-500 text-lg">Go to Home</Link>
    </View>
  )
}