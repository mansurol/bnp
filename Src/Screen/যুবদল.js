import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function যুবদল() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, marginTop: 35 }}>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}>
        বাংলাদেশ জাতীয়তাবাদী {"\n"}
        <Text>যুবদল</Text>
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
          বাংলাদেশ জাতীয়তাবাদী যুবদল, বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) এর যুব
          শাখা। ১৯৭৮ সালের ২৭ অক্টোবর শহীদ রাষ্ট্রপতি জিয়াউর রহমান বাংলাদেশ
          জাতীয়তাবাদী যুবদল নামে বিএনপির যুব সংগঠন প্রতিষ্ঠা করেন। প্রতিষ্ঠাতা
          আহ্বায়ক ছিলেন আবুল কাশেম যিনি পরে সভাপতি হন এবং সাইফুর রহমান প্রথম
          সাধারণ সম্পাদক হন। বর্তমানে সুলতান সালাউদ্দিন টুকু সভাপতি ও মোনায়েম
          মুন্না সাধারণ সম্পাদকের দায়িত্ব পালন করছেন। যুবদলের প্রধান কার্যালয়
          ঢাকার নয় পল্টনে অবস্থিত।
        </Text>
      </Text>
    </SafeAreaView>
  );
}
