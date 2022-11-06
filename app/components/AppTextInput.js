import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.primary}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.medium}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 10,
    flexDirection: "row",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    color: colors.dark,
  },
});

export default AppTextInput;
