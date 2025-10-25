import { Stack } from "expo-router";
import React from "react";

export const StackComponent = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: { backgroundColor: "#f5f5f5" },
        }}
      />
      <Stack.Screen
        name="(stacknavigation)/stack-home"
        options={{
          title: "routes",
          headerStyle: { backgroundColor: "#888" },
        }}
      />
      <Stack.Screen
        name="(modal)/modal"
        options={{
          title: "modal",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="(modal)/webmodal"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerShown: false,
        }}
      />
    </Stack>
  );
};
