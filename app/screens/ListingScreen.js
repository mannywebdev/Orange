import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppText from "../components/AppText";
import Card from "../components/Card";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Macbook M1 Air in Brand New Condition",
    price: 60000,
    image:
      "https://www.digitaltrends.com/wp-content/uploads/2021/11/macbook-pro-2021-01.jpg?p=1",
  },
  {
    id: 2,
    title: "Couch in Great Condition",
    price: 800,
    image:
      "https://rukminim1.flixcart.com/image/612/612/l1pc3gw0/sofa-sectional/n/l/d/-original-imagd7hmeqmcsrge.jpeg?q=70",
  },
];

function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price + " Rs"}
            img={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default ListingScreen;
