import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/Routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
