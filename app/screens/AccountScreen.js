import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: "format-list-bulleted",
  },
  {
    title: "My Messages",
    icon: "email",
  },
];

function AccountScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Manpreet Singh"
          subTitle="mannyvirdi98@gmail.com"
          image="https://i.ibb.co/8NvPpX5/Jasper-Art-2022-11-03-17-00-45-3.png"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          renderItem={({ item }) => {
            <ListItem style={styles.myDetails} title={item.title} />;
          }}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  myDetails: {
    backgroundColor: colors.white,
  },
});

export default AccountScreen;
