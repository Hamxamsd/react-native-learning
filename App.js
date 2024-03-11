import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import ExStyles from "./style";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayDetails, setDisplayDetails] = useState(false);

  const clearDetails = () => {
    // Add logic to clear the state variables here
    setDisplayDetails(false);
    setName("");
    setEmail("");
    setPassword("");
    setDisplayDetails(false);
  };

  return (
    <>
      <View>
        <Text style={ExStyles.textBox}>Simple Form</Text>
      </View>
      <View>
        <TextInput
          placeholder="Enter user name"
          style={ExStyles.inputBox}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="Enter email"
          style={ExStyles.inputBox}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Enter password"
          style={ExStyles.inputBox}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button title="Get Details" onPress={() => setDisplayDetails(true)} />
      <View style={{ marginVertical: 5 }}>
        <Button
          title="Clear Details"
          style={ExStyles.buttonBox}
          onPress={clearDetails}
        />
      </View>
      {displayDetails ? (
        <View>
          <Text style={{ fontSize: 20 }}>{name}</Text>
          <Text style={{ fontSize: 20 }}>{email}</Text>
          <Text style={{ fontSize: 20 }}>{password}</Text>
        </View>
      ) : null}
    </>
  );
};

export default App;
