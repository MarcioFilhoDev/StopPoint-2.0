import { StyleSheet, Text, View } from "react-native";
import React from "react";

import CloseDrawerBtn from "./CloseDrawerBtn";

export default function Pagamentos() {
  return (
    <View style={st.container}>
      <CloseDrawerBtn />

      <View>
        <Text style={{ color: "#fafafa", fontSize: 24, fontWeight: "bold" }}>
          Bem vindo!
        </Text>

        <Text style={{ color: "#fafafa", fontSize: 16 }}>Selecione a forma de pagamento</Text>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
});
