// import { View, Text, TouchableOpacity } from "react-native";
// import React, { useLayoutEffect } from "react";
// import { Ionicons } from "@expo/vector-icons";

// export default function সংগঠন({ navigation }) {
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerLeft: () => (
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons
//             name="ios-arrow-back"
//             size={24}
//             color="black"
//             style={{ paddingLeft: 10 }}
//           />
//         </TouchableOpacity>
//       ),
//     });
//   }, [navigation]);
//   return (
//     <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
//       <Text>
//         <Text style={{ fontSize: "bold", fontSize: 18, fontWeight: "900" }}>
//           সহযোগী সংগঠন:
//         </Text>{" "}
//         {"\n"}
//         <Text>● জাতীয়তাবাদী ছাত্রদল</Text> {"\n"}
//         <Text>● জাতীয়তাবাদী শ্রমিকদল</Text>
//       </Text>

//       <Text style={{ marginTop: 20 }}>
//         <Text
//           style={{
//             fontSize: "bold",
//             fontSize: 18,
//             fontWeight: "900",
//           }}
//         >
//           অঙ্গ সংগঠন:
//         </Text>{" "}
//         {"\n"}
//         <Text>● জাতীয়তাবাদী যুবদল</Text> {"\n"}
//         <Text>● জাতীয়তাবাদী সেচ্ছাসেবকদল</Text>
//         {"\n"}
//         <Text>● জাতীয়তাবাদী মুক্তিযোদ্ধাদল</Text> {"\n"}
//         <Text>● জাতীয়তাবাদী কৃষক দল</Text>
//         {"\n"}
//         <Text>● জাতীয়তাবাদী মৎসজীবীদল</Text> {"\n"}
//         <Text>● জাতীয়তাবাদী তাঁতীদল</Text>
//         {"\n"}
//         <Text>● জাতীয়তাবাদী ওলামাদল</Text> {"\n"}
//         <Text>● জাতীয়তাবাদী সামাজিক সাংস্কৃতিক সংস্থা (জাসাস)</Text>
//         {"\n"}
//         <Text>● জাতীয়তাবাদী মহিলাদল</Text> {"\n"}
//       </Text>

//       <Text style={{ marginTop: 20 }}>
//         <Text
//           style={{
//             fontSize: "bold",
//             fontSize: 18,
//             fontWeight: "900",
//           }}
//         >
//           পেশাজীবী সংগঠন:
//         </Text>{" "}
//         {"\n"}
//         <Text>● জাতীয়তাবাদী আইনজীবী ফোরাম</Text> {"\n"}
//         <Text>● ডক্টরস অ্যাসোসিয়েশন অব বাংলাদেশ</Text>
//         {"\n"}
//         <Text>● অ্যাসোসিয়েশন অব ইঞ্জিনিয়ার্স বাংলাদেশ (অ্যাব)</Text> {"\n"}
//         <Text>● এগ্রিকালচারিস্ট অ্যাসোসিয়েশন অব বাংলাদেশ</Text>
//         {"\n"}
//         <Text>● শিক্ষক -কর্মচারী ঐক্যজোট</Text> {"\n"}
//       </Text>
//     </View>
//   );
// }

import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function সংগঠন({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back"
            size={24}
            color="black"
            style={{ paddingLeft: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
      <Text>
        <Text style={{ fontSize: "bold", fontSize: 18, fontWeight: "900" }}>
          সহযোগী সংগঠন:
        </Text>{" "}
        {"\n"}
        <Text>● জাতীয়তাবাদী ছাত্রদল</Text> {"\n"}
        <Text>● জাতীয়তাবাদী শ্রমিকদল</Text>
      </Text>
    </View>
  );
}
