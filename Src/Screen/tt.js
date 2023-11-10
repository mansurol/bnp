import React from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";

const numColumns = 2;

const mcData = [
  {
    Id: 1,
    label: "সর্বশেষ",
    backgroundColor: "#75BEDD",
  },
  {
    Id: 2,
    label: "বিশেষ সংবাদ",
    backgroundColor: "#639AAD",
  },
  {
    Id: 3,
    label: "করোনাভাইরাস",
    backgroundColor: "#6A6091",
  },
  {
    Id: 4,
    label: "বাংলাদেশ",
    backgroundColor: "#316359",
  },
  {
    Id: 5,
    label: "রাজনীতি",
    backgroundColor: "#639AAD",
  },
  {
    Id: 6,
    label: "বাণিজ্য",
    backgroundColor: "#31577C",
  },
  {
    Id: 7,
    label: "মতামত",
    backgroundColor: "#73B5EB",
  },
  {
    Id: 8,
    label: "বিশ্ব",
    backgroundColor: "#071B53",
  },
  {
    Id: 9,
    label: "খেলা",
    backgroundColor: "#15385E",
  },
  {
    Id: 10,
    label: "বিনোদন",
    backgroundColor: "#35CABD",
  },
  {
    Id: 11,
    label: "একটু থামুন",
    backgroundColor: "#639AAD",
  },
  {
    Id: 12,
    label: "জীবনযাপন",
    backgroundColor: "#6A6091",
  },
  {
    Id: 13,
    label: "প্রযুক্তি",
    backgroundColor: "#316359",
  },
  {
    Id: 14,
    label: "শিক্ষা",
    backgroundColor: "#639AAD",
  },
  {
    Id: 15,
    label: "ধর্ম",
    backgroundColor: "#31577C",
  },
  {
    Id: 16,
    label: "ছবি",
    backgroundColor: "#73B5EB",
  },
  {
    Id: 17,
    label: "ভিডিও",
    backgroundColor: "#071B53",
  },
  {
    Id: 18,
    label: "চাকরি",
    backgroundColor: "#15385E",
  },
  {
    Id: 19,
    label: "বিশেষ সং্খ্যা",
    backgroundColor: "#35CABD",
  },
  {
    Id: 20,
    label: "গোলটেবিল",
    backgroundColor: "#35CABD",
  },
];

export default function tt() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardTwo}>
        {/* style={[styles.cardTwo, { backgroundColor: item.backgroundColor }]} */}
        <TouchableOpacity style={styles.CategoryGroupScreenStyle}>
          <Text style={[styles.CategoryGroupNameStyle]}>{item.label}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          marginHorizontal: 10,
          marginTop: 10,
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <FlatList
            data={mcData}
            renderItem={renderItem}
            keyExtractor={(item) => item.Id}
            numColumns={numColumns}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FB", // Background color for the entire component
  },
  cardTwo: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 3,
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
  },

  CategoryGroupScreenStyle: {
    flexDirection: "row",
    justifyContent: "center",
  },
  CategoryGroupNameStyle: {
    fontWeight: "700",
    fontSize: 17,
    color: "black",
    padding: 8,
    // fontFamily: "SolamanlipiBold",
    // fontFamily: "NotoSerifJPBold",
  },
});
