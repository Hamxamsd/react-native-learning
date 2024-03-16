import React from "react";
import { View, Text, Button } from "react-native";

const Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Login Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

export default Login;
