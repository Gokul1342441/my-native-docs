import { StackComponent } from "@/components/layout/StackComponent";
import { QueryProvider } from "@/providers/QueryProvider";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "../global.css";

export default function RootLayout() {
  return (
    <QueryProvider>
      <StatusBar style="dark" />
      <StackComponent />
    </QueryProvider>
  );
}
