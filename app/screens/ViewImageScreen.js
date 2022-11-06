import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.deleteIcon}>
        <MaterialIcons name="delete-outline" size={28} color="white" />
      </View>
      <View style={styles.closeIcon}>
        <Ionicons name="close" size={30} color="white" />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: "https://c4.wallpaperflare.com/wallpaper/109/839/817/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  deleteIcon: {
    position: "absolute",
    top: 40,
    left: 15,
  },
  container: {
    backgroundColor: colors.black,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    right: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
