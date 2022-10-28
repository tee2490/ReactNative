import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enterGoalText, setEnterGoalText] = useState();
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enterText) {
    setEnterGoalText(enterText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enterGoalText,
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        {courseGoals.map((goal, index) => (
          <View style={styles.goalItem}>
            <Text key={index}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalContainer: {
    paddingTop: 10,
    flex: 3,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
