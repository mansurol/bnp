// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Routes from "../Utility/Routes";
// import StackNav from "./StackNav";
// import About from "../Src/Screen/About";
// import নীতিমালা from "../Src/Screen/নীতিমালা";
// import সংগঠন from "../Src/Screen/সংগঠন";
// import কমিটি from "../Src/Screen/কমিটি";
// import সহায়তা from "../Src/Screen/সহায়তা";
// import কার্যক্রম from "../Src/Screen/কার্যক্রম";
// import CustomDrawer from "../Src/Components/CustomDrawer";
// import মামলা_এবং_তথ্য from "../Src/Screen/মামলা_এবং_তথ্য";
// const Drawer = createDrawerNavigator();

// export default function DrawerNav() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{ headerShown: false }}
//       drawerContent={(props) => <CustomDrawer {...props} />}
//     >
//       <Drawer.Screen name={Routes.HOMESCREEN_TAB} component={StackNav} />
//       <Drawer.Screen
//         name={Routes.ABOUT}
//         component={About}
//         options={{ headerShown: true }}
//       />
//       <Drawer.Screen
//         name={Routes.নীতিমালা}
//         component={নীতিমালা}
//         options={{ headerShown: true }}
//       />

//       <Drawer.Screen
//         name={Routes.কমিটি}
//         component={কমিটি}
//         options={{ headerShown: true }}
//       />
//       <Drawer.Screen
//         name={Routes.সংগঠন}
//         component={সংগঠন}
//         options={{ headerShown: true }}
//       ></Drawer.Screen>
//       <Drawer.Screen
//         name={Routes.সহায়তা}
//         component={সহায়তা}
//         options={{ headerShown: true }}
//       />
//       <Drawer.Screen
//         name={Routes.কার্যক্রম}
//         component={কার্যক্রম}
//         options={{ headerShown: true }}
//       />
//       <Drawer.Screen
//         name={Routes.মামলা_এবং_তথ্য}
//         component={মামলা_এবং_তথ্য}
//         options={{ headerShown: true }}
//       />
//     </Drawer.Navigator>
//   );
// }
import { createDrawerNavigator } from "@react-navigation/drawer";
import Routes from "../Utility/Routes";
import StackNav from "./StackNav";
import About from "../Src/Screen/About";
import নীতিমালা from "../Src/Screen/নীতিমালা";
import সংগঠন from "../Src/Screen/সংগঠন";
import কমিটি from "../Src/Screen/কমিটি";
import সহায়তা from "../Src/Screen/সহায়তা";
import কার্যক্রম from "../Src/Screen/কার্যক্রম";
import CustomDrawer from "../Src/Components/CustomDrawer";
import মামলা_এবং_তথ্য from "../Src/Screen/মামলা_এবং_তথ্য";
import BottomTav from "./BottomTav";
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
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
        name={Routes.কমিটি}
        component={কমিটি}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name={Routes.সংগঠন}
        component={BottomTav}
        options={{ headerShown: true }}
      ></Drawer.Screen>
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
