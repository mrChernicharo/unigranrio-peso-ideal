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
    <View style={styles.container}>
      <Text style={styles.label}>Informe a altura</Text>
      <RectButton style={styles.button} onPress={incrementHeight}>
        <Text style={styles.buttonText}>+</Text>
      </RectButton>
      <TextInput value={String(height)} />
      <RectButton style={styles.button} onPress={decrementHeight}>
        <Text style={styles.buttonText}>-</Text>
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 1,
    marginTop: 12,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  label: {},
  input: {},
  button: {},
});
export default HeightInput;
