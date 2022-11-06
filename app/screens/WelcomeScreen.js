import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/splash.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo_secondary.png")}
        />
        <AppText style={styles.tagLine}>Buy or sell something today!</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title={"Let's Get Started"}
          color="primary"
          background="secondary"
          onPress={() => console.log("Sign Up")}
        />
        <AppButton
          title={"Log In"}
          color="secondary"
          background="primary"
          onPress={() => console.log("Login")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    paddingBottom: 60,
    width: "100%",
  },
  logo: {
    height: 120,
    width: 180,
    marginBottom: 10,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 360,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#47968B",
  },
  tagLine: {
    color: colors.secondary,
  },
});

export default WelcomeScreen;
