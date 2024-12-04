import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import BottomRoutes from "./BottomRoutes";
import Perfil from "../Components/Perfil";
import CustomDrawer from "./CustomDrawer";

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        
        drawerLabelStyle: {
          fontWeight: "bold",
        },

        drawerActiveBackgroundColor: "#d8fda0",
        drawerActiveTintColor: "#65a30d",

        drawerInactiveBackgroundColor: "#f1f1f1",
        drawerInactiveTintColor: "#737373",
      }}
    >
      <Drawer.Screen
        name="BottomRoutes"
        component={BottomRoutes}
        options={{ title: "BottomRoutes" }}
      />

      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
}
