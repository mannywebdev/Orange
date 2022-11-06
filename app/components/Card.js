import React from "react";

import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, img }) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: img,
        }}
      />
      <View style={styles.details}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: colors.secondary,
    overflow: "hidden",
  },
  details: {
    paddingHorizontal: 15,
    paddingVertical: 9,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 3,
    fontWeight: "700",
  },
  subTitle: {
    color: colors.black,
  },
});

export default Card;
