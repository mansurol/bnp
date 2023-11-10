import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Routes from "../../Utility/Routes";
export default function অঙ্গ_সংগঠন({ navigation }) {
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
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <TouchableOpacity style={styles.cardTwo}>
          <Text style={styles.CategoryGroupNameStyle}>জাতীয়তাবাদী যুবদল</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardTwo}>
          <Text style={styles.CategoryGroupNameStyle}>
            জাতীয়তাবাদী সেচ্ছাসেবকদল
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.cardTwo}>
          <Text style={styles.CategoryGroupNameStyle}>
            জাতীয়তাবাদী মুক্তিযোদ্ধাদল
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardTwo}>
          <Text style={styles.CategoryGroupNameStyle}>জাতীয়তাবাদী কৃষকদল</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.cardTwo}>
          <Text style={styles.CategoryGroupNameStyle}>
            জাতীয়তাবাদী মৎসজীবীদল
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardTwo}>
          <Text style={styles.CategoryGroupNameStyle}>
            জাতীয়তাবাদী তাঁতীদল
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.cardTwo}>
          <Text style={styles.CategoryGroupNameStyle}>
            জাতীয়তাবাদী ওলামাদল
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardTwo}>
          <Text style={styles.CategoryGroupNameStyle}>
            জাতীয়তাবাদী মহিলাদল
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.cardTwolast}>
          <Text style={styles.CategoryGroupNameStyle}>জাসাস</Text>
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
    width: "49%",
    marginTop: 20,
  },

  cardTwolast: {
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
    width: "99%",
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
