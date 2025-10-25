import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={
          {
            title: "Home",
            headerStyle:{backgroundColor: "#f5f5f5"}
          }
        }
      />
      <Stack.Screen
        name="(stacknavigation)/stack-home"
        options={
          { title: "routes" }
        }
      />
    </Stack>
  )
}
