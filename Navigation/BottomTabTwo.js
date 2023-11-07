import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Routes from "../Utility/Routes";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import আইনি_সহায়তা from "../Src/Screen/আইনি_সহায়তা";
import তথ্য_সহায়তা from "../Src/Screen/তথ্য_সহায়তা";

const BottomTabTwo = () => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back"
            size={24}
            color="black"
            style={{ paddingLeft: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let IconName;
          if (route.name === Routes.আইনি_সহায়তা) {
            IconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === Routes.তথ্য_সহায়তা) {
            IconName = focused ? "newspaper-sharp" : "newspaper-outline";
          }

          return <Icon name={IconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
      initialRouteName={Routes.আইনি_সহায়তা}
    >
      <Tab.Screen name={Routes.আইনি_সহায়তা} component={আইনি_সহায়তা} />
      <Tab.Screen name={Routes.তথ্য_সহায়তা} component={তথ্য_সহায়তা} />
    </Tab.Navigator>
  );
};

export default BottomTabTwo;

const styles = StyleSheet.create({});
