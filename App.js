import React from "react";
import { SectionList, Text, View } from "react-native";

const App = () => {
  const users = [
    {
      id: 1,
      name: "John",
      data: ["JS", "JAVA", "REACT-JS"],
    },
    {
      id: 2,
      name: "Bruce",
      data: ["PHP", "JAVA", "REACT-Native"],
    },
    {
      id: 3,
      name: "Doe",
      data: ["CPP", "Python", "Laravel"],
    },
  ];

  return (
    <>
      <View>
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
            Section List in React Native
          </Text>
        </View>
        <SectionList
          sections={users}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 17, color: "gray", marginLeft: 10 }}>
              {item}
            </Text>
          )}
          renderSectionHeader={({ section: { name } }) => (
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>
              {name}
            </Text>
          )}
        />
      </View>
    </>
  );
};

export default App;
