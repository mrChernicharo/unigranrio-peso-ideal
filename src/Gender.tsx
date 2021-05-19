import React, { useState } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";

interface Props {}

const Gender = () => {
  const [gender, setGender] = useState("female");
  function toggleSwitch() {
    const next = gender === "female" ? "male" : "female";
    setGender(next);
  }

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.switchLabel}>Informe o gênero</Text>
      <View style={styles.switchContainer}>
        <Text>Masculino</Text>
        <Switch
          trackColor={{ false: "lightblue", true: "pink" }}
          thumbColor={"#fff"}
          ios_backgroundColor={gender === "female" ? "pink" : "lightblue"}
          onValueChange={toggleSwitch}
          value={gender === "female"}
        />
        <Text>Feminino</Text>
      </View>
    </View>
  );
};

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
export default Gender;
