import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const App = () => {
  const [showModal, setShowMoal] = useState(false);

  return (
    <>
      <View>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
          hidden={false}
        />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
  },
});
