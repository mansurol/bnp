import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Routes from "../../Utility/Routes";
export default function সহযোগী({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.HOMESCREEN_TAB)}
        >
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
    <View style={{ padding: 10 }}>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <TouchableOpacity style={styles.cardTwo}>
          <Text style={styles.CategoryGroupNameStyle}>
            জাতীয়তাবাদী ছাত্রদল
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.cardTwo}>
          <Text style={styles.CategoryGroupNameStyle}>
            জাতীয়তাবাদী শ্রমিকদল
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardTwo: {
    backgroundColor: "#F5F6FB",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: "white",
    marginTop: 5,
    marginRight: 7,
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    marginTop: 20,
  },

  CategoryGroupNameStyle: {
    fontWeight: "500",
    fontSize: 13,
    color: "black",
    padding: 10,
    paddingVertical: 12,
    textAlign: "center",
  },
});
