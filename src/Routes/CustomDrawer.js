import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { AntDesign } from "react-native-vector-icons";

import { DrawerActions } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";

const foto =
  "https://avatars.githubusercontent.com/u/181983281?s=400&u=4473ef89bae2f4e6ca1b5649ab7e781afe0c1567&v=4";

export default function CustomDrawer(props) {
  const navegar = useNavigation();

  function fecharDrawer() {
    navegar.closeDrawer();
  }

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: "100%",
          height: 85,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 70,
        }}
      >
        <Image
          source={{ uri: foto }}
          style={{ height: 64, width: 64, borderRadius: 64 }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#18181b",
            marginBottom: -5,
            marginTop: 5,
          }}
        >
          Márcio Filho
        </Text>

        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#84cc16" }}>
          Desenvolvedor
        </Text>

        <View
          style={{
            marginTop: 10,
            marginBottom: 60,
            width: "100%",
            height: 1,
            backgroundColor: "#3f3f46",
            opacity: 0.2,
          }}
        ></View>
      </View>

      <View style={{ gap: 10 }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const st = StyleSheet.create({
  closeDrawerArea: {
    alignItems: "flex-end",
  },
  closeDrawerBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#65a30d",
    height: 50,
    width: 50,
    borderRadius: "100%",
  },
});
