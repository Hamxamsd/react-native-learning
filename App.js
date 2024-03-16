import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

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
              marginBlock: 5,
            }}
          >
            Custom Buttons in React Native
          </Text>
        </View>
        <View>
          <TouchableHighlight>
            <Text style={styles.button}>Disabled</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={[styles.button, styles.primary]}>Primary</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={[styles.button, styles.success]}>Success</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={[styles.button, styles.error]}>Error</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={[styles.button, styles.warning]}>Warning</Text>
          </TouchableHighlight>
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
  button: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "lightgray",
    textAlign: "center",
    margin: 10,
    padding: 10,
    color: "#fff",
    borderRadius: 10,
    shadowColor: "blue",
    elevation: 10,
    shadowOpacity: 1,
  },
  primary: {
    backgroundColor: "blue",
  },
  success: {
    backgroundColor: "green",
  },
  error: {
    backgroundColor: "red",
  },
  warning: {
    backgroundColor: "gold",
  },
});
