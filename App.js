import React from "react";
import { View, StyleSheet, Platform, Text } from "react-native";

const App = () => {
  return (
    <>
      <View>
        <Text>Platform Check : {Platform.OS}</Text>
        {Platform.OS === "android" ? (
          <Text style={styles.text}>
            {JSON.stringify(Platform.constants.Brand)}
          </Text>
        ) : (
          <Text>IOS</Text>
        )}
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
});
