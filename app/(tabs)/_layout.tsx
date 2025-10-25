import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return <Tabs screenOptions={
        {
            tabBarLabelPosition: "below-icon"
        }
    }>
        <Tabs.Screen name='index'
            options={{
                tabBarLabel: "Routes",
                tabBarIcon: ({ color }) => <FontAwesome name="home" color={color} size={24} />,
                title: "Routes"
            }}
        />
        <Tabs.Screen name='dev'
            options={{
                tabBarLabel: "Development",
                tabBarIcon: ({ color }) => <FontAwesome name="deviantart" color={color} size={24} />,
                // tabBarBadge: "4",
                title: "Development things..."
            }}
        />
        <Tabs.Screen name='expo'
            options={{
                tabBarLabel: "Expo.go",
                tabBarIcon: ({ color }) => <FontAwesome name="location-arrow" color={color} size={24} />,
                title: "Expo Components"
            }}
        />
        {/* <Tabs.Screen name='native'
            options={{
                tabBarLabel: "Native",
                tabBarIcon: ({ color }) => <FontAwesome name="connectdevelop" color={color} size={24} />,
                title: "Native"
            }}
        /> */}
    </Tabs>
}