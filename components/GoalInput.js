import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(text) {
        setEnteredGoal(text);
    }

    function addGoalHandler() {
         props.onAddGoal(enteredGoal);
         setEnteredGoal('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Add your Goal'
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 8,
        margin: 8,
        width: '70%'
    },
})