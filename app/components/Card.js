import React from "react";

import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, img }) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{
          uri: "https://c4.wallpaperflare.com/wallpaper/109/839/817/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg",
        }}
      />
      <View style={styles.cardDetails}>
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
  cardDetails: {
    paddingHorizontal: 15,
    paddingVertical: 9,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 3,
    fontWeight: "700",
  },
});

export default Card;
