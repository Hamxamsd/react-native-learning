import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const App = () => {
  const [showModal, setShowMoal] = useState(false);

  return (
    <>
      <View style={styles.mainBox}>
        <View style={{ backgroundColor: "gray", width: "100%", height: 30 }} />
        <View style={{ alignItems: "center", backgroundColor: "purple" }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "900",
              color: "white",
              marginBlock: 5,
            }}
          >
            Pressable in React Native
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Pressable
            // onPress={() => console.warn("Normal Press")}
            // onLongPress={() => console.warn("Long Press")}
            onPressIn={() => console.warn("Press In")}
            onPressOut={() => console.warn("Press Out")}
          >
            <Text style={styles.btn}>Pressable</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
  },
  btn: {
    backgroundColor: "darkblue",
    color: "white",
    padding: 10,
    margin: 10,
    textAlign: "center",
    fontWeight: "bold",
    shadowColor: "#000",
    elevation: 5,
    borderRadius: 10,
  },
});
