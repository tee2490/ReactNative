import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(enterGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enterGoalText,
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(index) {
    var data = [...courseGoals];
    data.splice(index, 1);
    setCourseGoals(data);
  }

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button
        title="Add new Goal"
        color="#841584"
        onPress={startAddGoalHandler}
      />
      {modalVisible && (
        <GoalInput
          visible={modalVisible}
          addGoalHandler={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
      )}
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(ItemData) => {
            return (
              <GoalItem
                ItemData={ItemData}
                deleteGoalHandler={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => index}
        />
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
  goalContainer: {
    paddingTop: 10,
    flex: 3,
  },
});
