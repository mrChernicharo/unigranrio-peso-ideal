import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface Props {
  weight: number;
}

const Output = ({ weight }: Props) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Seu peso ideal é</Text>
      <Text style={s.result}>{weight + "Kg"}</Text>
    </View>
  );
};

export default Output;

const s = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "purple",
    padding: 20,
    marginTop: 12,
    alignItems: "center",
  },
  title: {},
  result: {
    fontSize: 30,
  },
});
