import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

import AppText from "./AppText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontWeight: "600",
  },
});

export default PickerItem;
