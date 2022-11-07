import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color, background, style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[background] }, style]}
      onPress={onPress}
    >
      <View>
        <Text style={[styles.text, { color: colors[color] }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    marginVertical: 6,
  },
  text: {
    fontWeight: "900",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default AppButton;
