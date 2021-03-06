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
        <Text style={gender === "male" ? styles.maleText : styles.opaque}>
          Masculino
        </Text>
        <Switch
          trackColor={{ false: "#006eff", true: "#ff0000" }}
          thumbColor={"#fff"}
          ios_backgroundColor={gender === "female" ? "#ff0000" : "#006eff"}
          onValueChange={genderToggle}
          value={gender === "female"}
        />
        <Text style={gender === "female" ? styles.femaleText : styles.opaque}>
          Feminino
        </Text>
      </View>
    </View>
  );
};

export default GenderToggle;

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 12,
    padding: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  switchLabel: {},
  maleText: {
    color: "#006eff",
  },
  femaleText: {
    color: "#ff0000",
  },
  opaque: {
    color: "#cdcdcd",
  },
});
