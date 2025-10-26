import { useNotification } from '@/context/NotificationContext';
import React from 'react';
import { Text, View } from 'react-native';

export default function pushnotification() {
    const { expoPushToken, notification, error } = useNotification();
    console.log("🚀 ~ pushnotification ~ expoPushToken:", expoPushToken)
    if(error)<view className='flex-1 items-center justify-center'>fucku</view>
    return (
        <View className='flex-1 items-center justify-center'>
            <Text>Your Push Notification</Text>
            <Text>{expoPushToken}</Text>
            <Text>Latest Notification</Text>
            <Text>{notification?.request?.content?.title}</Text>
            <Text>{JSON.stringify(notification?.request?.content?.data, null, 2)}</Text>
        </View>
    )
}