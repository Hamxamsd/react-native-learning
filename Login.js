import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Login Screen</Text>
      <TextInput
        placeholder="Enter  text here"
        style={{
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "lightgray",
          width: 200,
          padding: 5,
          borderColor: "gray",
          margin: 5,
        }}
      />
      <Button title="Go to Home" />
    </View>
  );
};

export default Login;
