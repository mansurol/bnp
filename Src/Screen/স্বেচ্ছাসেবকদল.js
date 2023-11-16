import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function স্বেচ্ছাসেবকদল() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, marginTop: 35 }}>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}>
        বাংলাদেশ জাতীয়তাবাদী {"\n"}
        <Text>স্বেচ্ছাসেবক দল</Text>
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
          বিএনপির প্রতিষ্ঠাতা শহীদ রাষ্ট্রপতি জিয়াউর রহমান বিভিন্ন দুর্যোগের
          সময়ে মানুষের পাশে দাঁড়ানোর কথা চিন্তা করে ১৯৮০ সালের ১৯ আগস্ট
          জাতীয়তাবাদী স্বেচ্ছাসেবক দল নামে একটি সংগঠন প্রতিষ্ঠা করেন। এ সময়
          সাংবাদিক কাজী সিরাজকে আহ্বায়ক করে ২৩ সদস্যের কমিটি গঠন করা হয়। এরপর
          ১৯৮৫ সালের ১৯ আগস্ট কাজী আসাদুজ্জামানের নেতৃত্বে ২৯ সদস্যের একটি কমিটি
          গঠন করা হয়।
        </Text>
      </Text>
    </SafeAreaView>
  );
}
