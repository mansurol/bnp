import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Src/Screen/মূলপাতা";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./Navigation/StackNav";
import DrawerNav from "./Navigation/DrawerNav";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}
