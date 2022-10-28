import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ ItemData }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{ItemData.item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
