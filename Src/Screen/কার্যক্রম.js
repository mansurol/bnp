import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function কার্যক্রম({ navigation }) {
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
  return (
    <View>
      <Text>কার্যক্রম</Text>
    </View>
  );
}
