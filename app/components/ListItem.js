import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Text,
} from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  ImageContainer,
  style,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={colors.light}
          style={styles.feedback}
          onPress={onPress}
        >
          <View style={[styles.container, style]}>
            {ImageContainer}
            {image && (
              <Image
                style={styles.image}
                source={{
                  uri: image,
                }}
              />
            )}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  feedback: {
    marginHorizontal: 10,
    borderRadius: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 16,
    color: colors.black,
  },
});

export default ListItem;
