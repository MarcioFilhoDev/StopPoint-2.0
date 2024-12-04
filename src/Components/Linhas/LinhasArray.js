import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { Ionicons } from "react-native-vector-icons";

export default function LinhasArray(props) {
  return (
    <View style={st.container}>
      <TouchableOpacity style={st.btn}>
        <Ionicons name="bus-outline" size={28} color="#fafafa" />
        <Text style={st.nomeLinha} numberOfLines={1}>{props.data.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const st = StyleSheet.create({
  container: {},
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 10
  },
  nomeLinha: {
    color: "#fff",
    fontSize: 16,
    width: "80%",
  },
});
