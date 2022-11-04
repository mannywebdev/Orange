import { StyleSheet, View, Text } from "react-native";

import Card from "./app/components/Card";
import colors from "./app/config/colors";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
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
  return <ListingDetailsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
