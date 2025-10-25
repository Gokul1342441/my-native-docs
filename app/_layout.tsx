import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";

export default function RootLayout() {
  return (
    <>
    <StatusBar style="dark"/>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="index"
          options={
            {
              title: "Home",
              headerStyle: { backgroundColor: "#f5f5f5" }
            }
          }
        />
        <Stack.Screen
          name="(stacknavigation)/stack-home"
          options={
            {
              title: "routes",
              headerStyle: {
                backgroundColor: "#888",
              }
            }
          }
        />
      </Stack>
    </>
  )
}
