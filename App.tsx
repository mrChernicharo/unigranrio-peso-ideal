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
} from "react-native";

export default function App() {
  const [isFemale, setIsFemale] = useState<boolean>(true);

  function toggleSwitch() {
    setIsFemale(!isFemale);
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Peso Ideal</Text>
        <Text style={styles.subtitle}>Avalie sua condição física</Text>

        <Text style={styles.inputLabel}>Você é</Text>
        <View style={styles.inputContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isFemale ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isFemale}
          />
        </View>

        <Text style={styles.inputLabel}>Informe sua altura</Text>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="numeric"
            returnKeyType="default"
            style={styles.input}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Calcular!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    borderColor: "green",
    borderWidth: 1,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 16,
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
