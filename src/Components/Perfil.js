import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import CloseDrawerBtn from "./CloseDrawerBtn";

export default function Perfil() {
  const foto =
    "https://avatars.githubusercontent.com/u/181983281?s=400&u=4473ef89bae2f4e6ca1b5649ab7e781afe0c1567&v=4";

  return (
    <View style={st.container}>
      <CloseDrawerBtn />

      <View style={st.dadosUsuario}>
        <Image source={{ uri: foto }} style={st.fotoUser} />
        <Text>Perfil usuario</Text>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
  },
  dadosUsuario: {
    alignItems: "center",
  },
  fotoUser: {
    width: 140,
    height: 140,
    borderRadius: 70
  },
});
