import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
  Dimensions,
} from "react-native";
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
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={onAddGoalHandler}
              color="#c474c3"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f90595" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const DeviceHeight = Dimensions.get("window").height;
console.log(DeviceHeight);

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: DeviceHeight < 450 ? "flex-start" : "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#311b6b",
  },
  textInput: {
    alignContent: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#f6d9f6",
    backgroundColor: "#f6d9f6",
    color: "#7828b4",
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
  image: {
    width: DeviceHeight < 450 ? 150 : 100,
    height: DeviceHeight < 450 ? 150 : 100,
    margin: DeviceHeight < 450 ? 10 : 20,
  },
});
