import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: "format-list-bulleted",
  },
  {
    title: "My Messages",
    icon: "email",
  },
  {
    title: "Log Out",
    icon: "logout",
  },
];

function AccountScreen() {
  return (
    <Screen>
      <View style={styles.screen}>
        <ListItem
          style={styles.myAccount}
          title="Manpreet Singh"
          subTitle="mannyvirdi98@gmail.com"
          image="https://i.ibb.co/8NvPpX5/Jasper-Art-2022-11-03-17-00-45-3.png"
        />
      </View>
      <View style={styles.menu}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          renderItem={({ item }) => (
            <ListItem
              style={styles.listing}
              title={item.title}
              ImageContainer={<Icon name={item.icon} size={40} />}
              onPress={() => console.log("hello", item)}
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  listing: {
    padding: 8,
    backgroundColor: colors.white,
  },
  menu: {
    flex: 1,
  },
  screen: {
    marginVertical: 10,
  },
});

export default AccountScreen;
