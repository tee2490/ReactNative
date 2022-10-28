import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem(props) {
  const { ItemData, deleteGoalHandler } = props;
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => deleteGoalHandler(ItemData.index)}
      >
        <Text style={styles.goalText}>{ItemData.item}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
