import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
