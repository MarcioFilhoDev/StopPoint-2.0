import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import { AntDesign } from "react-native-vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function CloseDrawerBtn() {
  const navegar = useNavigation();

  return (
    <View style={st.openDrawerArea}>
      <TouchableOpacity
        style={st.openDrawer}
        onPress={() => navegar.openDrawer()}
      >
        <AntDesign name="menu-unfold" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const st = StyleSheet.create({
  openDrawerArea: {
    width: 100,
    marginTop: 50,
    marginLeft: 30,
  },

  openDrawer: {
    backgroundColor: "#65a30d",
    padding: 6,
    borderRadius: "100%",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
