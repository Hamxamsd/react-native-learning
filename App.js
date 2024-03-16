import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Modal } from "react-native";

const App = () => {
  const [showModal, setShowMoal] = useState(false);

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
            Modal in React Native
          </Text>
        </View>
        <Modal transparent visible={showModal} animationType="fade">
          <View style={styles.centerView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello Ameer Hamza Khan</Text>
              <Button title="Close Modal" onPress={() => setShowMoal(false)} />
            </View>
          </View>
        </Modal>
        <View style={styles.btnView}>
          <Button title="Open Modal" onPress={() => setShowMoal(true)} />
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
  btnView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalView: {
    backgroundColor: "white",
    padding: 35,
    borderRadius: 20,
    shadowColor: "#000",
    elevation: 5,
  },
});
