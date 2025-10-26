import { StackComponent } from "@/components/layout/StackComponent";
import { NotificationProvider } from "@/context/NotificationContext";
import { QueryProvider } from "@/providers/QueryProvider";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "../global.css";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});


export default function RootLayout() {
  return (
    <NotificationProvider>
      <QueryProvider>
        <StatusBar style="dark" />
        <StackComponent />
      </QueryProvider>
    </NotificationProvider>
  );
}
