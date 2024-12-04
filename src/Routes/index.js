import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Login from "../Components/Login";
import Cadastro from "../Components/Cadastro";
import Procurar from "../Components/Procurar";
import DrawerRoutes from "./DrawerRoutes";

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Procurar" component={Procurar} />

      <Stack.Screen name="Cadastro" component={Cadastro} />

      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
    </Stack.Navigator>
  );
}
