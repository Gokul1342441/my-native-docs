import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return <Tabs screenOptions={
        {
            tabBarLabelPosition : "below-icon"
        }
    }>
        <Tabs.Screen name='index'
            options={{
                tabBarLabel: "Home",
                tabBarIcon:({color}) => <FontAwesome name="home" color={color} size={24}/>,
                title:"Home"
            }}
        />
        <Tabs.Screen name='native'
            options={{
                tabBarLabel: "Native",
                tabBarIcon:({color}) => <FontAwesome name="search" color={color} size={24}/>,
                title:"Native"
            }}
        />
        <Tabs.Screen name='expo'
            options={{
                tabBarLabel: "Expo.go",
                tabBarIcon:({color}) => <FontAwesome name="user" color={color} size={24}/>,
                title:"Expo Components"
            }}
        />
        <Tabs.Screen name='dev'
            options={{
                tabBarLabel: "Development",
                tabBarIcon:({color}) => <FontAwesome name="step-forward" color={color} size={24}/>,
                tabBarBadge : "4",
                title:"Development Standards"
            }}
        />
    </Tabs>
}