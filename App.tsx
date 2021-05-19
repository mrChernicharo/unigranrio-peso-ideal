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
import GenderToggle from "./src/GenderToggle";

export type Gender = "male" | "female";

export default function App() {
  const [gender, setGender] = useState<Gender>("female");

  function handleGenderToggle() {
    const next = gender === "female" ? "male" : "female";
    setGender(next);
  }

  return (
    <SafeAreaView>
      <Header />

      <GenderToggle gender={gender} genderToggle={handleGenderToggle} />

      <Text>{gender}</Text>
    </SafeAreaView>
  );
}
