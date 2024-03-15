import React from "react";
import { Button, Text, View } from "react-native";

const App = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: "gray", width: "100%", height: 30 }} />
        <View
          style={{ alignItems: "center", backgroundColor: "purple", flex: 1 }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "900",
              color: "white",
              marginY: 5,
            }}
          >
            Responsive Design in React Native
          </Text>
        </View>
        <Button title="Button" />
      </View>
    </>
  );
};

export default App;
