import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Peso ideal</Text>
      <Text style={styles.subtitle}>Avalie já sua condição física</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
  },
});
