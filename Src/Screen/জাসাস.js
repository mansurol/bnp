import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function জাসাস() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, marginTop: 35 }}>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}>
        বাংলাদেশ জাতীয়তাবাদী {"\n"}
        <Text>সামাজিক সাংস্কৃতিক সংস্থা</Text>
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
          বাংলাদেশ জাতীয়তাবাদী সামাজিক ও সাংস্কৃতিক সংগঠন (জাসাস): শহীদ
          রাষ্ট্রপতি জিয়াউর রহমান বাংলাদেশের জাতীয় সংস্কৃতি চর্চা এবং এর
          বিকাশের লক্ষ্যে ১৯৭৮ সালের ২৭ ডিসেম্বর 'বাংলাদেশ জাতীয়তাবাদী সামাজিক
          ও সাংস্কৃতিক সংগঠন' (জাসাস) প্রতিষ্ঠা করেন।
        </Text>
      </Text>
    </SafeAreaView>
  );
}
