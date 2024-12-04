import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

import Procurar from "../Components/Procurar";
import Pagamentos from "../Components/Pagamentos";
import Configs from "../Components/Configs";

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          height: 60,
        },
        tabBarActiveTintColor: "#65a30d",
        tabBarInactiveBackgroundColor: "#363636",
        tabBarActiveBackgroundColor: "#363636",
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name="Procurar"
        component={Procurar}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search-outline" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Pagamentos"
        component={Pagamentos}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="card-outline" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Configs"
        component={Configs}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="settings-outline" color={color} size={size} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
