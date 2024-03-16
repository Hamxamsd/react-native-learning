import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ route }) => {
  const { params } = route;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Home Screen</Text>
      <Text>{params.data}</Text>
    </View>
  );
};

export default Home;
