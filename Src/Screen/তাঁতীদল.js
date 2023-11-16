import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function তাঁতীদল() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, marginTop: 35 }}>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}>
        বাংলাদেশ জাতীয়তাবাদী {"\n"}
        <Text>তাঁতী দল</Text>
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
          জাতীয়তাবাদী তাঁতী দল: জাতীয়তাবাদী তাঁতী দল, বিএনপির অন্যতম সহযোগী
          সংগঠন, ১৯৮০ সালের ১৮ ফেব্রুয়ারি বিএনপির প্রতিষ্ঠাতা, শহীদ রাষ্ট্রপতি
          জিয়াউর রহমান কর্তৃক প্রতিষ্ঠিত হয়।
        </Text>
      </Text>
    </SafeAreaView>
  );
}
