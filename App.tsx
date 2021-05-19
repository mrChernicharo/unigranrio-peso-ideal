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
  const [userHeight, setUserHeight] = useState(1.7);

  function toggleSwitch() {
    setIsFemale(!isFemale);
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>Peso Ideal</Text>
      <Text style={styles.subtitle}>Avalie sua condição física</Text>

      <Text style={styles.switchLabel}>Informe o gênero</Text>
      <View style={styles.switchContainer}>
        <Text>Masculino</Text>
        <Switch
          trackColor={{ false: "lightblue", true: "pink" }}
          thumbColor={"#fff"}
          ios_backgroundColor={isFemale ? "pink" : "lightblue"}
          onValueChange={toggleSwitch}
          value={isFemale}
        />
        <Text>Feminino</Text>
      </View>

      <View style={styles.inputGroupContainer}>
        <Text style={styles.inputLabel}>Informe sua altura</Text>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
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
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 6,
    width: "100%",
    paddingVertical: 10,
  },
  switchLabel: {
    fontSize: 16,
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
