import { StyleSheet, TextInput, Button, View } from "react-native";
import React, { useState } from "react";

export default function GoalInput(props) {
  const [enterGoalText, setEnterGoalText] = useState();

  function goalInputHandler(enterText) {
    setEnterGoalText(enterText);
  }

  function onAddGoalHandler() {
    props.addGoalHandler(enterGoalText);
    setEnterGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enterGoalText}
      />
      <Button title="Add Goal" onPress={onAddGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 20,
  },
  textInput: {
    flex: 1,
    width: "70%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    marginRight: 8,
    padding: 8,
  },
});
