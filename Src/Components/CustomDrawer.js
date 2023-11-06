import { View, Image, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#ffff" }}
      >
        <Image
          source={require("../../assets/ধানেরশীষ.jpg")}
          style={{
            height: 150,
            width: 220,
            resizeMode: "contain",
            justifyContent: "center",
            alignSelf: "center",
          }}
        />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
