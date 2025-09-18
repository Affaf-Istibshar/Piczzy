import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TabRoutes } from "./routes";

const Tab = createBottomTabNavigator();
type IoniconName = keyof typeof Ionicons.glyphMap;

export default function AppNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => {
                const current = TabRoutes.find((r) => r.name === route.name);

                return {
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: "#4CAF50",
                    tabBarInactiveTintColor: "gray",
                    tabBarStyle: {
                        position: "absolute",
                        bottom: 16,
                        left: 16,
                        right: 16,
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        borderRadius: 20,
                        height: 70,
                        shadowColor: "#000",
                        shadowOpacity: 0.1,
                        shadowOffset: { width: 0, height: 5 },
                        shadowRadius: 10,
                        elevation: 5,
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        if (!current) return null;

                        const iconName: IoniconName = focused
                            ? (current.icon.active as IoniconName)
                            : (current.icon.inactive as IoniconName);

                        return <Ionicons name={iconName} size={size + 2} color={color} />;
                    },
                };
            }}
        >
            {TabRoutes.map((r) => (
                <Tab.Screen key={r.name} name={r.name} component={r.component} />
            ))}
        </Tab.Navigator>
    );
}
