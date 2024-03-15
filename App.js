import React from "react";
import { Text, View, StyleSheet } from "react-native";

const App = () => {
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
              marginY: 5,
            }}
          >
            Responsive Design in React Native
          </Text>
        </View>
        <View style={styles.box1}>
          <View style={styles.InnerBox1}></View>
          <View style={styles.InnerBox2}></View>
          <View style={styles.InnerBox3}></View>
        </View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
  },
  box1: { flex: 1, backgroundColor: "brown", flexDirection: "row" },
  box2: { flex: 1, backgroundColor: "pink" },
  box3: { flex: 1, backgroundColor: "yellow" },
  InnerBox1: { flex: 1, backgroundColor: "skyblue", margin: 5 },
  InnerBox2: { flex: 1, backgroundColor: "lightgreen", margin: 5 },
  InnerBox3: { flex: 1, backgroundColor: "lightgray", margin: 5 },
});
