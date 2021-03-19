import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function BookmarkScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>BookmarkScreen </Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
