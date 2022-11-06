import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import ListItemSeperator from "./ListItemSeperator";

function AppPicker({ icon, items, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.primary}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.primary}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <View style={styles.closeIcon}>
            <Ionicons
              name="close"
              size={30}
              color={colors.primary}
              onPress={() => setModalVisible(false)}
            />
          </View>
          <FlatList
            style={styles.pickerList}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => console.log(item)}
              />
            )}
            ItemSeparatorComponent={ListItemSeperator}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    right: 15,
  },
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 10,
    flexDirection: "row",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    color: colors.dark,
  },
  pickerList: {
    marginVertical: 30,
  },
});

export default AppPicker;
