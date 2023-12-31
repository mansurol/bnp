import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function ছাত্রদল() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, marginTop: 35 }}>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}>
        বাংলাদেশ জাতীয়তাবাদী {"\n"}
        <Text>ছাত্রদল</Text>
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
          বাংলাদেশ জাতীয়তাবাদী ছাত্রদল বাংলাদেশ জাতীয়তাবাদী দলের ছাত্র সংগঠন।
          বাংলাদেশ জাতীয়তাবাদী ছাত্রদল ১৯৭৯ সালে প্রতিষ্ঠিত হয়। ছাত্রদলের
          প্রধান শ্লোগান হচ্ছে - শিক্ষা, ঐক্য, প্রগতি। এই সংগঠনটির প্রধান
          কার্যালয় ঢাকার নয়া পল্টনে অবস্থিত। বর্তমানে যারা বিএনপির রাজনীতির
          সাথে যুক্ত, তাদের মধ্যে অনেকেই জাতীয়তাবাদী ছাত্রদলের সাথে যুক্ত
          ছিলেন।
        </Text>
        {"\n"}
        {"\n"}
        <Text>
          জিয়াউর রহমান যখন বিএনপির প্রতিষ্ঠা করেন, তখন তিনি ভবিষ্যতের নেতৃত্ব
          তৈরি করার জন্য এর একটি ছাত্র সংগঠন প্রতিষ্ঠা করার প্রয়োজনিয়তা অনুভব
          করেন। তাই তিনি ১ জানুয়ারি ১৯৭৯ সালে কেন্দ্রীয়ভাবে এই সংগঠনটি
          প্রতিষ্ঠা করেন। তখনকার সময়ে জিয়াউর রহমানের জনপ্রিয়তার জন্য অনেক
          তরুন অনুপ্রানিত হয়ে জাতীয়তাবাদী ছাত্রদলে যোগদান করেন।
        </Text>
        {"\n"}
        {"\n"}
        <Text>
          কাজী আসাদুজ্জামান (ঢাকা বিশ্ববিদ্যালয়) কে আহ্বায়ক করে ঐদিন ছাত্রদলের
          প্রথম কমিটি প্রকাশ করা হয়।
        </Text>
        {"\n"}
        {"\n"}
      </Text>
    </SafeAreaView>
  );
}
