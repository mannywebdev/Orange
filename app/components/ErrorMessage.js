import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function ErrorMessage({ error }) {
  if (!error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}
const styles = StyleSheet.create({
  error: {
    fontSize: 13,
    color: colors.red,
  },
});

export default ErrorMessage;
