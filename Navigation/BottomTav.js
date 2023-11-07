import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Routes from "../Utility/Routes";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import অঙ্গ_সংগঠন from "../Src/Screen/অঙ্গ_সংগঠন";
import সহযোগী from "../Src/Screen/সহযোগী";
import পেশাজীবী from "../Src/Screen/পেশাজীবী";
import সংগঠন from "../Src/Screen/সংগঠন";

const BottomTav = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let IconName;
          if (route.name === Routes.সংগঠন) {
            IconName = focused ? "ios-apps-sharp" : "ios-apps-outline";
          } else if (route.name === Routes.অঙ্গ_সংগঠন) {
            IconName = focused ? "ios-add-sharp" : "ios-add-circle-outline";
          } else if (route.name === Routes.সহযোগী) {
            IconName = focused ? "accessibility" : "accessibility";
          } else if (route.name === Routes.পেশাজীবী) {
            IconName = focused ? "ios-search-sharp" : "ios-search-outline";
          }
          return <Icon name={IconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
      initialRouteName={Routes.সংগঠন}
    >
      <Tab.Screen name={Routes.সংগঠন} component={সংগঠন} />
      <Tab.Screen name={Routes.অঙ্গ_সংগঠন} component={অঙ্গ_সংগঠন} />
      <Tab.Screen name={Routes.সহযোগী} component={সহযোগী} />
      <Tab.Screen name={Routes.পেশাজীবী} component={পেশাজীবী} />
    </Tab.Navigator>
  );
};

export default BottomTav;

const styles = StyleSheet.create({});
