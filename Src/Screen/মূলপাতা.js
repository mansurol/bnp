import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function মূলপাতা() {
  const handleButtonPress = () => {
    // Handle button press action here
    console.log("Button Pressed!");
    // You can perform any action you want when the button is pressed
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            source={require("../../assets/tarique-rahman-b569.jpg")}
            style={{
              height: 150,
              width: "100%",

              justifyContent: "center",
              alignSelf: "center",
            }}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 20,
                marginBottom: 10,
                fontWeight: "800",
              }}
            >
              আমাদের নেতৃবৃন্দ
            </Text>
            <Text style={{ fontSize: 15, marginBottom: 10, fontWeight: "400" }}>
              প্রেসিডেন্ট জিয়াউর রহমানের নেতৃত্বে বীর মুক্তিযোদ্ধা এবং
              বাংলাদেশী জাতীয়তাবাদী আদর্শে বিশ্বাসী ব্যক্তিবর্গ ১৯৭৮ সালে দলটি
              প্রতিষ্ঠা করেন।
            </Text>
            <TouchableOpacity onPress={handleButtonPress}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#0B8645",
                  padding: 10,
                  borderRadius: 5,
                  marginTop: 10,
                  width: "30%",
                }}
              >
                <Text style={{ color: "#0B8645", textAlign: "center" }}>
                  আরও জানতে{" "}
                  <Icon
                    name="eye"
                    size={20}
                    color="black"
                    style={{ marginRight: 5 }}
                  />{" "}
                  {/* Icon */}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/jiaurrahman.jpg")}
            style={{
              height: 150,
              width: "31%",

              justifyContent: "center",
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../../assets/khaledazia.jpg")}
            style={{
              height: 150,
              width: "31%",
              margin: 10,
              justifyContent: "center",
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../../assets/tarequerahman.jpg")}
            style={{
              height: 150,
              width: "31%",

              justifyContent: "center",
              alignSelf: "center",
            }}
          />
        </View>

        <View style={{ marginTop: 20, marginHorizontal: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              প্রোগ্রাম এবং প্রেস রিলিজ
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              আরো দেখুন{" "}
              <Icon
                name="angle-right"
                size={20}
                color="black"
                style={{ marginLeft: 10, paddingTop: 5 }}
              />
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
