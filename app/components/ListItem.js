import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: colors.secondary,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontWeight: "700",
    marginBottom: 4,
    fontSize: 19,
  },
  subTitle: {
    fontSize: 16,
    color: colors.black,
  },
});

export default ListItem;
