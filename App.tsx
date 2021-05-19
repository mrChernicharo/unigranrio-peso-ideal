import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  TextInputChangeEventData,
} from "react-native";
import Header from "./src/Header";
import Gender from "./src/Gender";

export default function App() {
  const [userHeight, setUserHeight] = useState(1.7);

  // function handleHeightChange(e) {
  //   console.log(e);
  // }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header />

      <Gender />

      <View style={styles.inputGroupContainer}>
        <Text style={styles.inputLabel}>Informe sua altura</Text>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            // onTextInput={handleHeightChange}
            value={String(userHeight)}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Calcular!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    padding: 30,
    borderColor: "orange",
    borderWidth: 1,
  },
  innerContainer: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 6,
  },

  inputGroupContainer: {
    paddingVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 6,
  },
  inputLabel: {
    fontSize: 16,
  },
  input: {
    display: "flex",
    width: "65%",
    fontSize: 30,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  button: {
    backgroundColor: "green",
    padding: 6,
    width: "35%",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
  },
});
