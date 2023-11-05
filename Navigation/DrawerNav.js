import { createDrawerNavigator } from "@react-navigation/drawer";
import Routes from "../Utility/Routes";
import About from "../Src/Screen/About";
import Committe from "../Src/Screen/Committe";
import StackNav from "./StackNav";
import নীতিমালা from "../Src/Screen/নীতিমালা";
import সংগঠন from "../Src/Screen/সংগঠন";
import কমিটি from "../Src/Screen/কমিটি";
import সহায়তা from "../Src/Screen/সহায়তা";
import কার্যক্রম from "../Src/Screen/কার্যক্রম";
import মামলা_এবং_তথ্য from "../Src/Screen/মামলা_এবং_তথ্য";
// import CustomDropdown from "../Src/Components/CustomDropdown";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={Routes.HOMESCREEN_TAB} component={StackNav} />
      <Drawer.Screen
        name={Routes.ABOUT}
        component={About}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name={Routes.নীতিমালা}
        component={নীতিমালা}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name={Routes.সংগঠন}
        component={সংগঠন}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name={Routes.কমিটি}
        component={কমিটি}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name={Routes.সহায়তা}
        component={সহায়তা}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name={Routes.কার্যক্রম}
        component={কার্যক্রম}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name={Routes.মামলা_এবং_তথ্য}
        component={মামলা_এবং_তথ্য}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}
