import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const routesPages = [
  { name: "Haptics", href: "/haptics", desc: "haptic (touch) feedback " },
  { name: "Push Notification", href: "/pushnotification", desc: "Push Notificaiton firebase" },
];

export default function expo() {
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold mb-4 text-gray-800">Expo SDK</Text>

      <View className="flex flex-col space-y-4 gap-2">
        {routesPages.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => router.push(item.href as any)}
            className="p-4 rounded-2xl border  border-[#d7ddf5] bg-[#e6efff] active:opacity-80"
          >
            <Text className="text-lg font-semibold text-gray-900 mb-1">{item.name}</Text>
            <Text className="text-gray-500 text-sm">{item.desc}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
