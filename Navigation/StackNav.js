import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Utility/Routes";
import Home from "../Src/Screen/মূলপাতা";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ছাত্রদল from "../Src/Screen/ছাত্রদল";
import শ্রমিকদল from "../Src/Screen/শ্রমিকদল";
import যুবদল from "../Src/Screen/যুবদল";
import মুক্তিযোদ্ধাদল from "../Src/Screen/মুক্তিযোদ্ধাদল";
import মহিলাদল from "../Src/Screen/মহিলাদল";
import জাসাস from "../Src/Screen/জাসাস";
import কৃষকদল from "../Src/Screen/কৃষকদল";
import স্বেচ্ছাসেবকদল from "../Src/Screen/স্বেচ্ছাসেবকদল";
import তাঁতীদল from "../Src/Screen/তাঁতীদল";
import ওলামাদল from "../Src/Screen/ওলামাদল";
import মৎস্যজীবীদল from "../Src/Screen/মৎস্যজীবীদল";

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

      <Stack.Screen name={Routes.যুবদল} component={যুবদল} />
      <Stack.Screen name={Routes.মুক্তিযোদ্ধাদল} component={মুক্তিযোদ্ধাদল} />
      <Stack.Screen name={Routes.মহিলাদল} component={মহিলাদল} />
      <Stack.Screen name={Routes.জাসাস} component={জাসাস} />
      <Stack.Screen name={Routes.কৃষকদল} component={কৃষকদল} />
      <Stack.Screen name={Routes.স্বেচ্ছাসেবকদল} component={স্বেচ্ছাসেবকদল} />
      <Stack.Screen name={Routes.তাঁতীদল} component={তাঁতীদল} />
      <Stack.Screen name={Routes.ওলামাদল} component={ওলামাদল} />
      <Stack.Screen name={Routes.মৎস্যজীবীদল} component={মৎস্যজীবীদল} />
    </Stack.Navigator>
  );
}
