import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

export default function Cadastro() {
  const navegar = useNavigation()

  return (
    <View style={st.container}>
      <Text>Cadastro</Text>
      <Button title='Voltar' onPress={ () => navegar.goBack()}/>
    </View>
  )
}

const st = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})