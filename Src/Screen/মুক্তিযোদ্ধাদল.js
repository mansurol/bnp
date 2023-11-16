import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function মুক্তিযোদ্ধাদল() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, marginTop: 35 }}>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}>
        বাংলাদেশ জাতীয়তাবাদী {"\n"}
        <Text>মুক্তিযোদ্ধা দল</Text>
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
          ১৯৯২ সালের ২৫ আগস্ট তৎকালীন প্রধানমন্ত্রী ও বিএনপি চেয়ারপারসন বেগম
          খালেদা জিয়ার নির্দেশে বাংলাদেশ জাতীয়তাবাদী মুক্তিযোদ্ধা দল
          প্রতিষ্ঠিত হয়।
        </Text>
      </Text>
    </SafeAreaView>
  );
}
