import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function addNewGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoal) {
    setGoals((currentGoals) => [...currentGoals, { text: enteredGoal, id: Math.random().toString() }])
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter(goal => goal.id != id)
    })
  }


  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={addNewGoalHandler}/>
      {modalIsVisible && <GoalInput visible={modalIsVisible} AddGoal={addGoalHandler}/>}
      <View style={styles.goalsContainer}>
        <FlatList 
        data={goals} 
        renderItem={(itemData) => {
          return <GoalItem 
          text={itemData.item.text}
          id={itemData.item.id}
          onDeleteItem={deleteGoalHandler}
          />;
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
        alwaysBounceVertical={false}
       />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5,
  },
});
