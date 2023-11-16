import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function কৃষকদল() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, marginTop: 35 }}>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}>
        বাংলাদেশ জাতীয়তাবাদী {"\n"}
        <Text>কৃষক দল</Text>
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
          জাতীয়তাবাদী কৃষক দল: শহীদ রাষ্ট্রপতি জিয়াউর রহমান ১৯৮০ সালের ৩০
          ডিসেম্বর বাংলাদেশ জাতীয়তাবাদী কৃষক দল প্রতিষ্ঠা করেন। সে সময়
          বিচারপতি আবদুস সাত্তারকে আহ্বায়ক করে কমিটি গঠন করা হয়। এরপর ১৯৯২
          সালে বিএনপির সাবেক সাধারণ সম্পাদক (পরে বহিষ্কৃত) আবদুল মান্নান
          ভূঁইয়াকে সভাপতি করে কৃষকদলের কমিটি গঠন করা হয়।
        </Text>
      </Text>
    </SafeAreaView>
  );
}
