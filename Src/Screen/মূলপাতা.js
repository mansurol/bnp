import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const openLink = (url) => {
  Linking.openURL(url).catch((err) => console.error("An error occurred", err));
};
const SocialIcons = () => {
  return (
    <View
      style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}
    >
      <TouchableOpacity
        onPress={() => openLink("https://www.facebook.com/bnpbd.org")}
      >
        <Icon
          name="facebook"
          size={30}
          style={{ marginHorizontal: 5, color: "#3b5998" }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openLink("https://www.instagram.com/bnpbd/?igshid=YmMyMTA2M2Y%3D")
        }
      >
        <Icon
          name="instagram"
          size={30}
          style={{ marginHorizontal: 5, color: "#c13584" }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openLink(
            "https://twitter.com/bdbnp78?fbclid=IwAR3Q283HzoOBATGXAycGh8x4QAmnDZfNWBBTRE5cI8DuAw4d6f0Jjixdq-g"
          )
        }
      >
        <Icon
          name="twitter"
          size={30}
          style={{ marginHorizontal: 5, color: "#1da1f2" }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink("https://t.me/bnpbd_org")}>
        <Icon
          name="telegram"
          size={30}
          style={{ marginHorizontal: 5, color: "#0088cc" }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openLink("https://www.youtube.com/@bdbnp")}
      >
        <Icon
          name="youtube"
          size={30}
          style={{ marginHorizontal: 5, color: "#ff0000" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default function মূলপাতা() {
  const contentBlocks = [
    {
      title:
        "বাংলাদেশের গণতন্ত্র পুনরুদ্ধারে রাশিয়ার ইতিবাচক ভূমিকা প্রত্যাশা করে বিএনপি",
      description:
        "জাখারোভার মন্তব্য বাংলাদেশের নাগরিকদের আশা-আকাঙ্ক্ষার সম্পূর্ণ বিপরীত: রিজভী..",
    },
    {
      title: "বুধবার থেকে ৪৮ ঘণ্টার অবরোধের ডাক বিএনপির",
      description:
        "আগামী বুধবার ও বৃহস্পতিবার সারাদেশ ব্যাপী সর্বাত্মক অবরোধের ঘোষণা দিয়েছে বিএনপি। এটি বিএনপির ষষ্ঠ দফা অবরোধ কর্মসূচি...",
    },
    {
      title: "লাল-সবুজের পতাকা যতদিন থাকবে ততদিন বিএনপি থাকবে: রিজভী",
      description:
        "বিএনপির সিনিয়র যুগ্ম-মহাসচিব রুহুল কবির রিজভী বলেছেন, বাংলাদেশের লাল-সবুজের পতাকা যতদিন থাকবে ততদিন বিএনপি রাজনৈতিক দল হিসেবে থাকবে...",
    },
  ];
  const handleButtonPress = () => {
    // Handle button press action here
    console.log("Button Pressed!");
    // You can perform any action you want when the button is pressed
  };

  const shadowStyle = Platform.select({
    ios: {
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    android: {
      elevation: 5,
    },
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            source={require("../../assets/tarique-rahman-b569.jpg")}
            style={{
              height: 160,
              width: "100%",

              justifyContent: "center",
              alignSelf: "center",
            }}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 20,
                marginBottom: 10,
                fontWeight: "800",
              }}
            >
              আমাদের নেতৃবৃন্দ
            </Text>
            <Text style={{ fontSize: 15, marginBottom: 10, fontWeight: "400" }}>
              প্রেসিডেন্ট জিয়াউর রহমানের নেতৃত্বে বীর মুক্তিযোদ্ধা এবং
              বাংলাদেশী জাতীয়তাবাদী আদর্শে বিশ্বাসী ব্যক্তিবর্গ ১৯৭৮ সালে দলটি
              প্রতিষ্ঠা করেন।
            </Text>
            <TouchableOpacity onPress={handleButtonPress}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#0B8645",
                  padding: 10,
                  borderRadius: 5,
                  marginTop: 10,
                  width: "30%",
                }}
              >
                <Text style={{ color: "#0B8645", textAlign: "center" }}>
                  আরও জানতে
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/jiaurrahman.jpg")}
            style={{
              height: 150,
              width: "31%",

              justifyContent: "center",
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../../assets/khaledazia.jpg")}
            style={{
              height: 150,
              width: "31%",
              margin: 10,
              justifyContent: "center",
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../../assets/tarequerahman.jpg")}
            style={{
              height: 150,
              width: "31%",

              justifyContent: "center",
              alignSelf: "center",
            }}
          />
        </View>

        <View style={{ marginTop: 20, marginHorizontal: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 15 }}>
              প্রেস রিলিজ
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
                আরো দেখুন <Icon name="angle-right" size={16} color="gray" />
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                width: "48%",
                borderWidth: 1,
                borderColor: "#c1c1c1",
                borderRadius: 5,
                ...shadowStyle, // Apply the shadow style here
              }}
            >
              <Image
                source={require("../../assets/pressRelise1.jpg")}
                style={{
                  height: 100,
                  width: "100%",
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                }}
              />
              <Text style={{ textAlign: "justify", padding: 5 }}>
                শহীদ ডাঃ মিলন দিবস উপলক্ষে বিএনপি’র ভারপ্রাপ্ত চেয়ারম্যান ...
              </Text>

              <TouchableOpacity>
                <Text style={{ color: "#007ACC", padding: 5 }}>
                  আরো পড়ুন
                  <Icon name="angle-right" size={16} color="#007ACC" />
                  <Icon name="angle-right" size={16} color="#007ACC" />
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "48%",
                borderWidth: 1,
                borderColor: "#c1c1c1",
                marginLeft: 10,
                borderRadius: 5,
                // backgroundColor: "white",
                ...shadowStyle, // Apply the shadow style here
              }}
            >
              <Image
                source={require("../../assets/pressRelise2.jpg")}
                style={{
                  height: 100,
                  width: "100%",
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                }}
              />
              <Text style={{ textAlign: "justify", padding: 5 }}>
                শহীদ ডাঃ মিলন দিবস উপলক্ষে বিএনপি’র ভারপ্রাপ্ত চেয়ারম্যান ...
              </Text>

              <TouchableOpacity>
                <Text style={{ color: "#007ACC", padding: 5 }}>
                  আরো পড়ুন
                  <Icon name="angle-right" size={16} color="#007ACC" />
                  <Icon name="angle-right" size={16} color="#007ACC" />
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 15 }}>
              সর্বশেষ সংবাদ
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
                আরো দেখুন <Icon name="angle-right" size={16} color="gray" />
              </Text>
            </TouchableOpacity>
          </View>
          {contentBlocks.map((block, index) => (
            <TouchableOpacity key={index}>
              <View
                style={{
                  borderBottomWidth: index !== contentBlocks.length - 1 ? 1 : 0,
                  borderColor: "#c1c1c1",
                  paddingBottom: 10,
                  marginBottom: 15,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "600" }}>
                  {block.title}
                </Text>
                <Text style={{ fontSize: 13, fontWeight: "400", marginTop: 7 }}>
                  {block.description}
                </Text>
                <TouchableOpacity onPress={handleButtonPress}>
                  <Text style={{ color: "#007ACC", paddingVertical: 5 }}>
                    আরো পড়ুন
                    <Icon name="angle-right" size={16} color="#007ACC" />
                    <Icon name="angle-right" size={16} color="#007ACC" />
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 15 }}>
              সংবাদ সম্মেলন
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
                আরো দেখুন <Icon name="angle-right" size={16} color="gray" />
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF", // Background color
              borderRadius: 5,
              shadowColor: "#000", // Shadow color
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.3,
              shadowRadius: 2,
              elevation: 5, // Android shadow
              marginBottom: 20,
            }}
          >
            <Image
              source={require("../../assets/rijbi.jpg")}
              style={{
                height: 160,
                width: "100%",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />
            <Text style={{ padding: 10 }}>
              বিএনপি’র সিনিয়র যুগ্ম-মহাসচিব এডভোকেট রুহুল কবির রিজভীর সংবাদ
              সম্মেলন || 27 November 2023
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF", // Background color
              borderRadius: 5,
              shadowColor: "#000", // Shadow color
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.3,
              shadowRadius: 2,
              elevation: 5, // Android shadow
              marginBottom: 20,
            }}
          >
            <Image
              source={require("../../assets/rijbi2.jpg")}
              style={{
                height: 160,
                width: "100%",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />
            <Text style={{ padding: 10 }}>
              বিএনপি’র সিনিয়র যুগ্ম-মহাসচিব এডভোকেট রুহুল কবির রিজভীর সংবাদ
              সম্মেলন || 26 November 2023
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF", // Background color
              borderRadius: 5,
              shadowColor: "#000", // Shadow color
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.3,
              shadowRadius: 2,
              elevation: 5, // Android shadow
              marginBottom: 20,
            }}
          >
            <Image
              source={require("../../assets/rijbi.jpg")}
              style={{
                height: 160,
                width: "100%",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />
            <Text style={{ padding: 10 }}>
              বিএনপি’র সিনিয়র যুগ্ম-মহাসচিব এডভোকেট রুহুল কবির রিজভীর সংবাদ
              সম্মেলন || 24 November 2023
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#E8F0F7",
            padding: 15,
          }}
        >
          <View>
            <Text
              style={{ textAlign: "center", fontSize: 13, fontWeight: "500" }}
            >
              জাতীয়তাবাদী দলে যোগ দিন
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 13, fontWeight: "500" }}
            >
              গণতন্ত্র ও ভোটাধিকার প্রতিষ্ঠার লড়াইয়ে যোগ দিন
            </Text>

            <View style={{ marginTop: 15 }}>
              <Text
                style={{ textAlign: "center", fontSize: 13, fontWeight: "500" }}
              >
                আমাদের ফলো করুন
              </Text>
              <SocialIcons />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
