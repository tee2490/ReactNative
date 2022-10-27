import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
 
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
        />
        <Button title="Add Goal"/>
      </View>
      <View style={styles.goalContainer}>
        <Text>List of goals...</Text>
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
});
