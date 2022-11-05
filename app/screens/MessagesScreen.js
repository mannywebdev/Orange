import React, { useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    description: "First Item Description",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    description: "Second Item Description",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    description: "Third Item Description",
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messages}>
            <ListItem
              title={item.title}
              subTitle={item.description}
              image="https://i.ibb.co/PwWgkQV/Jasper-Art-2022-11-03-16-48-58-2.png"
              onPress={() => console.log("hello", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
              title: "Second Item",
              description: "Second Item Description",
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  messages: {
    marginVertical: 5,
  },
});

export default MessagesScreen;
