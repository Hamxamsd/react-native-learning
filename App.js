import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import ExStyles from "./style";

const App = () => {
  const [name, setName] = useState("");

  return (
    <>
      <View>
        <Text style={ExStyles.textBox}>Button and Its Functionality</Text>
        <Text style={ExStyles.textBox}>{name}</Text>
        <Button title="Touch Me" color="purple" />
      </View>
      <View>
        <TextInput
          placeholder="Type here"
          style={ExStyles.inputBox}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Button title="Clear" onPress={() => setName("")} />
      </View>
    </>
  );
};

export default App;
