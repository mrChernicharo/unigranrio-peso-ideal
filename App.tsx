import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
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
import Output from "./src/Output";

export type Gender = "male" | "female";

export default function App() {
  const [gender, setGender] = useState<Gender>("female");
  const [height, setHeight] = useState(1.65);
  const [idealWeight, setIdealWeight] = useState(0);

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

  function calculateIdealWeight() {
    if (gender === "male") {
      setIdealWeight(Number((72.7 * height - 58).toFixed(2)));
    } else {
      setIdealWeight(Number((62.1 * height - 44.7).toFixed(2)));
    }
  }

  useEffect(() => {
    calculateIdealWeight();
  }, [gender, height]);

  return (
    <SafeAreaView>
      <Header />

      <GenderToggle gender={gender} genderToggle={handleGenderToggle} />

      <HeightInput
        height={height}
        incrementHeight={handleIncrement}
        decrementHeight={handleDecrement}
      />

      <Output weight={idealWeight} />
    </SafeAreaView>
  );
}
