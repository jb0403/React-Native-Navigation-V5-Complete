import "react-native-gesture-handler";
import React from "react";
import { View, Text, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MainTabScreen from "./screens/MainTabScreen";
import DrawerContent from "./screens/DrawerContent";
import SupportScreen from "./screens/SupportScreen";
import SettingScreen from "./screens/SettingScreen";
import BookmarkScreen from "./screens/BookmarkScreen";

const Drawer = createDrawerNavigator();
// const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator>

      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#009387",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home Title" }}
        />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
