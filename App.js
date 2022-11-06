import { StyleSheet, View, Text } from "react-native";

import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  console.log("APP EXECUTED");
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
  return <MessagesScreen />;
  // return (
  //   <Screen>
  //     <ListItem title="Manpreet Singh" ImageContainer={<Icon name="email" />} />
  //   </Screen>
  // );
  // return <AccountScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
