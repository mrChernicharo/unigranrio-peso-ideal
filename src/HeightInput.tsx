import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";

interface Props {
  height: number;
  incrementHeight: () => void;
  decrementHeight: () => void;
}

const HeightInput = ({ height, incrementHeight, decrementHeight }: Props) => {
  return (
    <View style={s.container}>
      <Text style={s.label}>Informe a altura</Text>

      <View style={s.inputContainer}>
        <RectButton style={s.button} onPress={decrementHeight}>
          <Text style={s.buttonText}>-</Text>
        </RectButton>
        <TextInput style={s.input} value={String(height) + "m"} />
        <RectButton style={s.button} onPress={incrementHeight}>
          <Text style={s.buttonText}>+</Text>
        </RectButton>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    // borderColor: "red",
    // borderWidth: 1,
    marginTop: 12,
    padding: 10,
  },
  inputContainer: {
    borderRadius: 6,
    borderColor: "green",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#fff",
  },
  label: {
    marginBottom: 12,
  },
  input: {
    fontSize: 28,
  },
  button: {
    width: 34,
    alignItems: "center",
    backgroundColor: "#3c8b56",
  },
});
export default HeightInput;
