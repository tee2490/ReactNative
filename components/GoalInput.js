import { StyleSheet, TextInput, Button, View, Modal } from "react-native";
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
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 20,
  },
  textInput: {
    alignContent: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  button: {
    marginHorizontal: 8,
    width: "40%",
  },
});
