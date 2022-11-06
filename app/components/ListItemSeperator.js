import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

function ListItemSeperator() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: colors.secondary,
    marginHorizontal: 15,
  },
});

export default ListItemSeperator;
