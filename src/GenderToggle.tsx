import React from "react";
import { StyleSheet, View, Switch, Text } from "react-native";
import { Gender } from "../App";

interface GenderProps {
  gender: Gender;
  genderToggle: () => void;
}

const GenderToggle = ({ gender, genderToggle }: GenderProps) => {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.switchLabel}>Informe o gênero</Text>
      <View style={styles.switchContainer}>
        <Text>Masculino</Text>
        <Switch
          trackColor={{ false: "lightblue", true: "pink" }}
          thumbColor={"#fff"}
          ios_backgroundColor={gender === "female" ? "pink" : "lightblue"}
          onValueChange={genderToggle}
          value={gender === "female"}
        />
        <Text>Feminino</Text>
      </View>
    </View>
  );
};

export default GenderToggle;

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "center",
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
});
