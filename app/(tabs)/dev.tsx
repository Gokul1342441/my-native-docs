import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const routesPages = [
  { name: "Development Listing", href: "/developmentListing", desc: "View all your development notes" },
  { name: "Form Validation", href: "/formvalidation", desc: "Learn native form validation concepts" },
  // { name: "Mmkv with FingerPrint", href: "/mmkvFingerprint", desc: "Learn Concepts with MMKV store with fingerPrint Access" },
];

export default function Dev() {
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold mb-4 text-gray-800">📚 My Native Learning Docs</Text>

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
