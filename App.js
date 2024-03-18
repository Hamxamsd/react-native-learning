import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Login from "./Login";
import SignUp from "./SignUp";
import { View } from "react-native";
import Other from "./Other";

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <>
      <View style={{ width: "100%", height: 30, backgroundColor: "gray" }} />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="SignUp" component={SignUp} />
          <Tab.Screen name="Other" component={Other} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
