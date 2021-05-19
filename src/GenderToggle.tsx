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
          trackColor={{ false: "#0000ff", true: "#ff0000" }}
          thumbColor={"#fff"}
          ios_backgroundColor={gender === "female" ? "#ff0000" : "#0000ff"}
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
    // alignItems: "center",
    // borderColor: "green",
    // borderWidth: 1,
    marginTop: 12,
    padding: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // borderColor: "green",
    // borderWidth: 1,
    // borderRadius: 6,
    width: "100%",
    paddingVertical: 10,
  },
  switchLabel: {},
  maleText: {
    color: "#0000ff",
  },
  femaleText: {
    color: "#ff0000",
  },
  opaque: {
    color: "#cdcdcd",
  },
});
