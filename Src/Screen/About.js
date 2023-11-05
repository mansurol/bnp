import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function About({ navigation }) {
  useLayoutEffect(() => {
    // Set a custom header title
    navigation.setOptions({
      title: "About",
    });

    // Customize the back button behavior
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back"
            size={24}
            color="black"
            style={{ paddingLeft: 10 }}
          />
          {/* Use your icon */}
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 10 }}>
        <Image
          source={require("../../assets/bnp-flag.png")} // Replace with the path to your logo
          style={{
            width: 100,
            height: 70,
            alignSelf: "center",
            marginTop: 20,
            marginBottom: 10,
          }}
        />
        <Text style={{ textAlign: "justify" }}>
          বাংলাদেশ জাতীয়তাবাদী দল - বিএনপি ১ লা সেপ্টেম্বর, ১৯৭৮ -এ বাংলাদেশী
          জাতীয়তাবাদের ভিত্তিতে প্রতিষ্ঠিত হয়েছিল, একটি আদর্শ যা জাতি, লিঙ্গ
          বা বর্ণ নির্বিশেষে সকল স্তরের বাংলাদেশীদের অধিকারকে স্বীকৃতি দেয়।
        </Text>
      </View>
      <View>
        <Image
          source={require("../../assets/jiyaur-rahman.jpg")}
          style={{
            width: "100%", // Use "100%" to make it full width
            height: undefined, // Let height be determined by the aspect ratio
            aspectRatio: 4 / 3, // Adjust the aspect ratio as needed
            alignSelf: "center",
            resizeMode: "cover",
            marginTop: 20,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
