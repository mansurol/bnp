import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function শ্রমিকদল() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, marginTop: 35 }}>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}>
        বাংলাদেশ জাতীয়তাবাদী {"\n"}
        <Text>শ্রমিকদল</Text>
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
          শ্রমিকদের বিভিন্ন দাবি আদায় এবং উৎপাদন বৃদ্ধি এবং দেশকে স্বাবলম্বী
          করার লক্ষ্যে শহীদ রাষ্ট্রপতি জিয়াউর রহমান ১৯৭৯ সালের ৩ মে বাংলাদেশ
          জাতীয়তাবাদী শ্রমিক দল প্রতিষ্ঠা করেন।
        </Text>
      </Text>
    </SafeAreaView>
  );
}
