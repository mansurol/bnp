import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function About({ navigation }) {
  useLayoutEffect(() => {
    // Set a custom header title

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
      <ScrollView>
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
        <View style={{ paddingHorizontal: 10 }}>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: 800,
                marginTop: 20,
              }}
            >
              প্রতিষ্ঠাতা
            </Text>
            <Text style={{ textAlign: "center" }}>
              <Text>১৯৭১ সালের মুক্তিযুদ্ধে</Text>
              {"\n"}
              <Text> সবচেয়ে বিখ্যাত যুদ্ধ নায়ক</Text> {"\n"}
              শহীদ রাষ্ট্রপতি জিয়াউর রহমান বীর উত্তম।
            </Text>
          </View>
          <Image
            source={require("../../assets/jiyaur-rahman.jpg")}
            style={{
              width: "100%",
              height: 130,
              alignSelf: "center",
              marginTop: 20,
              borderRadius: 5,
            }}
            resizeMode="cover"
          />
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 40,
          }}
        >
          <View>
            <Text style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                বিএনপি'র দলীয় পতাকা
              </Text>
              {"\n"}
              <Text style={{ fontSize: 26, fontWeight: "700" }}>
                দলীয় পতাকা
              </Text>
            </Text>
          </View>
          <View>
            <Image
              source={require("../../assets/bnp-flag.png")} // Replace with the path to your logo
              style={{
                width: 170,
                height: 100,
                marginBottom: 10,
              }}
            />
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 40,
          }}
        >
          <View>
            <Image
              source={require("../../assets/ধানেরশীষ.png")} // Replace with the path to your logo
              style={{
                width: 170,
                height: 100,
                marginBottom: 10,
              }}
            />
          </View>
          <View>
            <Text style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                বিএনপি'র নির্বাচনী প্রতীক
              </Text>
              {"\n"}
              <Text style={{ fontSize: 26, fontWeight: "700" }}>
                ধানের শীষ{" "}
              </Text>
            </Text>
          </View>
        </View>

        <View style={{ paddingVertical: 10 }}>
          <Image
            source={require("../../assets/bnp-time.png")} // Replace with the path to your logo
            style={{
              width: "100%",
              height: 200,
              marginBottom: 10,
              justifyContent: "center",
            }}
          />
        </View>

        <View style={{ paddingHorizontal: 10, paddingBottom: 15 }}>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: 600,
                marginTop: 20,
              }}
            >
              বাংলাদেশ জিন্দাবাদ
            </Text>
            <Text style={{ textAlign: "center" }}>
              <Text>বাংলাদেশ জাতীয়তাবাদী দলের মূলমন্ত্র</Text>
              {"\n"}
              <Text>
                {" "}
                বিএনপির প্রতিষ্ঠাতা শহীদ রাষ্ট্রপতি জিয়াউর রহমানও 'প্রথম
                বাংলাদেশ, আমার শেষ বাংলাদেশ' গানটি পছন্দ
              </Text>{" "}
              {"\n"}
              <Text>
                করতেন, যা এই ধারণা দেয় যে দলের নীতি সর্বদা বাংলাদেশের স্বার্থকে
                প্রাধান্য দেবে।
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
