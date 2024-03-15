import React, { useState } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import ExStyles from "./style";

const App = () => {
  const users = [
    { name: "Hamza", id: 1 },
    { name: "Mansoor", id: 2 },
    { name: "Najeeb", id: 3 },
    { name: "Waqar", id: 4 },
    { name: "Rohail", id: 5 },
    { name: "Sheroo", id: 6 },
    { name: "Zabih", id: 7 },
    { name: "Qadu", id: 8 },
    { name: "Ghafoor", id: 9 },
    { name: "Sohaib", id: 10 },
    { name: "MPA", id: 11 },
    { name: "Hanzla", id: 12 },
    { name: "Asad", id: 13 },
    { name: "Faisal", id: 14 },
    { name: "Mama", id: 15 },
  ];
  return (
    <>
      <View>
        <Text style={{ fontSize: 30, marginTop: 40, alignItems: "center" }}>
          Flex Property here
        </Text>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
          {users.map((item) => (
            <Text style={ExStyles.item}>{item.name}</Text>
          ))}
        </View>
      </View>
    </>
  );
};

export default App;
