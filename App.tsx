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
import HeightInput from "./src/HeightInput";

export type Gender = "male" | "female";

export default function App() {
  const [gender, setGender] = useState<Gender>("female");
  const [height, setHeight] = useState(1.65);

  function handleGenderToggle() {
    const next = gender === "female" ? "male" : "female";
    setGender(next);
  }

  function handleIncrement() {
    const next = Number((height + 0.01).toFixed(2));
    setHeight(next);
  }
  function handleDecrement() {
    const next = Number((height - 0.01).toFixed(2));
    setHeight(next);
  }

  return (
    <SafeAreaView>
      <Header />

      <GenderToggle gender={gender} genderToggle={handleGenderToggle} />

      <HeightInput
        height={height}
        incrementHeight={handleIncrement}
        decrementHeight={handleDecrement}
      />

      <Text>{gender}</Text>
      <Text>{height}</Text>
    </SafeAreaView>
  );
}
