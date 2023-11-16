import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function ওলামাদল() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, marginTop: 35 }}>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}>
        বাংলাদেশ জাতীয়তাবাদী {"\n"}
        <Text>ওলামা দল</Text>
      </Text>
      <Text
        style={{
          textAlign: "justify",
          fontSize: 14,
          fontWeight: "400",
          marginTop: 15,
        }}
      >
        <Text>
          ১৯৭৯ সালের ৩০ সেপ্টেম্বর শহীদ রাষ্ট্রপতি জিয়াউর রহমান ইসলামী
          চিন্তাধারার লোকদের নিয়ে জাতীয়তাবাদী উলামা দল গঠন করেন। নব্বইয়ের
          দশকে সংগঠনের প্রথম সম্মেলনে মাওলানা এসএম রুহুল আমিনকে সভাপতি ও
          মোয়াজ্জেম হোসেনকে সাধারণ সম্পাদক করা হয়।
        </Text>
      </Text>
    </SafeAreaView>
  );
}
