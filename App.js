import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import ExStyles from "./style";

const App = () => {
  const users = [
    { name: "Hamza", id: 1 },
    { name: "Mansoor", id: 2 },
    { name: "Najeeb", id: 3 },
    { name: "Waqar", id: 4 },
  ];
  return (
    <>
      <View>
        <Text style={{ fontSize: 30, marginTop: 40, alignItems: "center" }}>
          List of Flatlist Component
        </Text>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <Text style={ExStyles.item}>{item.name}</Text>
          )}
        />
      </View>
    </>
  );
};

export default App;
