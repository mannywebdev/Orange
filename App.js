import { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [firstName, setFirstName] = useState();
  const [category, setCategory] = useState();

  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

// return <WelcomeScreen />;
// return (
//   <View
//     style={{
//       flex: 1,
//       backgroundColor: colors.white,
//       padding: 20,
//       paddingTop: 100,
//     }}
//   >
//     <Card title="Macbook M1 Air" subTitle="20.00 Rs" />
//     <Card title="Macbook M1 Air" subTitle="20.00 Rs" />
//   </View>
// );
// return <ViewImageScreen />;
// return <ListingDetailsScreen />;
// return <MessagesScreen />;
// return (
//   <Screen>
//     <ListItem title="Manpreet Singh" ImageContainer={<Icon name="email" />} />
//   </Screen>
// );
// return <AccountScreen />;
// return <ListingScreen />;
