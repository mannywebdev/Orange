import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: "https://c4.wallpaperflare.com/wallpaper/109/839/817/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg",
        }}
      />
      <View style={styles.details}>
        <AppText style={styles.title}>Macbook Air M1 Pro</AppText>
        <AppText style={styles.subTitle}>20.00 Rs</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image="https://i.ibb.co/PwWgkQV/Jasper-Art-2022-11-03-16-48-58-2.png"
          title="Nadia Smith"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 260,
  },
  details: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: 23,
    fontWeight: "800",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 20,
    color: colors.black,
  },
  userContainer: {
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
