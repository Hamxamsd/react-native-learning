import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

const App = () => {
  const users = [
    { name: "Hamza", id: 1, email: "hamza@gmail.com" },
    { name: "Mansoor", id: 2, email: "mansoor@gmail.com" },
    { name: "Najeeb", id: 3, email: "najeeb@gmail.com" },
    { name: "Waqar", id: 4, email: "waqar@gmail.com" },
    { name: "Rohail", id: 5, email: "rohail@gmail.com" },
    { name: "Sheroo", id: 6, email: "sheroo@gmail.com" },
    { name: "Zabih", id: 7, email: "zabih@gmail.com" },
    { name: "Qadu", id: 8, email: "qadu@gmail.com" },
    { name: "Ghafoor", id: 9, email: "ghafoor@gmail.com" },
    { name: "Sohaib", id: 10, email: "sohib@gmail.com" },
    { name: "MPA", id: 11, email: "MPA@gmail.com" },
    { name: "Hanzla", id: 12, email: "hanzla@gmail.com" },
    { name: "Asad", id: 13, email: "asad@gmail.com" },
    { name: "Faisal", id: 14, email: "faisal@gmail.com" },
    { name: "Mama", id: 15, email: "mama@gmail.com" },
  ];
  return (
    <>
      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 22, marginTop: 40, fontWeight: "900" }}>
            Component in Loop with FlatList
          </Text>
        </View>
        <FlatList
          data={users}
          renderItem={(item) => <UserData data={item} />}
        />
      </View>
    </>
  );
};

export default App;

const UserData = ({ data }) => {
  const { item } = data;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 15,
    color: "purple",
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
  },
  box: {
    flexDirection: "row",
    borderColor: "purple",
    borderWidth: 2,
    margin: 5,
  },
});
