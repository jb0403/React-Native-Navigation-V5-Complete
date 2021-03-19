import React from "react";
import { View, Text, Button } from "react-native";

export default function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SettingScreen Navigation</Text>
      <Button
        title="Go To Setting Screen Again "
        onPress={() => navigation.push("Setting")}
      />
      <Button
        title="Go To Home Screen "
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go To First Screen "
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
