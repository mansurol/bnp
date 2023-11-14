import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Utility/Routes";
import Home from "../Src/Screen/মূলপাতা";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ছাত্রদল from "../Src/Screen/ছাত্রদল";
import শ্রমিকদল from "../Src/Screen/শ্রমিকদল";

const Stack = createNativeStackNavigator();

const CustomHeader = ({ navigation }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <FontAwesome
        name="bars"
        size={24}
        color="black"
        style={{ paddingRight: 10 }}
      />
    </TouchableOpacity>
    <Image
      source={require("../assets/bnp-flag.png")}
      style={{ width: 50, height: 30, marginRight: 8 }}
    />
    <View>
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>
        Bangladesh Nationalist
      </Text>
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>Party BNP</Text>
    </View>
  </View>
);

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.HOMESCREEN}
        component={Home}
        options={({ navigation }) => ({
          headerLeft: () => <CustomHeader navigation={navigation} />,
          headerTitle: "",
        })}
      />

      <Stack.Screen name={Routes.ছাত্রদল} component={ছাত্রদল} />
      <Stack.Screen name={Routes.শ্রমিকদল} component={শ্রমিকদল} />
    </Stack.Navigator>
  );
}
