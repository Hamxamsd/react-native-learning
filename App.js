import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const App = () => {
  const [selectedBtn, setSelectedBtn] = useState(1);

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
            Custom Radio Buttons in React Native
          </Text>
        </View>
        <View style={styles.main}>
          <TouchableOpacity onPress={() => setSelectedBtn(1)}>
            <View style={styles.wrapper}>
              <View style={styles.radio}>
                {selectedBtn === 1 ? <View style={styles.radioBg} /> : null}
              </View>
              <Text style={styles.radioText}>Radio 1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedBtn(2)}>
            <View style={styles.wrapper}>
              <View style={styles.radio}>
                {selectedBtn === 2 ? <View style={styles.radioBg} /> : null}
              </View>
              <Text style={styles.radioText}>Radio 2</Text>
            </View>
          </TouchableOpacity>
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
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  radioText: {
    color: "black",
    fontSize: 22,
  },
  radio: {
    width: 40,
    height: 40,
    borderColor: "black",
    borderRadius: 20,
    borderWidth: 3,
    margin: 10,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioBg: {
    backgroundColor: "black",
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 3,
  },
});
