import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";

const App = () => {
  const [show, setShow] = useState(false);

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
            ActivityIndicator in React Native
          </Text>
        </View>
        <View>
          <ActivityIndicator size={100} color="purple" animating={show} />
          <Button title="loader" onPress={() => setShow(!show)} />
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
});
