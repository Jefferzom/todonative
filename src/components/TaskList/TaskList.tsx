import React, { useState } from 'react';
import {
  TaskContainer,
  TaskGroup,
  TaskBox,
  TaskTitle,
  TaskButton,
  TaskInput,
  TaskBody
} from './styles';
import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import AsyncStorage from '@react-native-community/async-storage';


import Thumbtack from '../../assets/thumbtack.svg';
import Trash from '../../assets/trash.svg';



interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  async function handleCreateNewTask() {

    if (!newTaskTitle) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    }

    setTasks(oldState => [...oldState, newTask])

    Keyboard.dismiss();
    setNewTaskTitle('');
    Alert.alert("Sucesso", "Tarefa salva com sucesso!")

  }


  function handleToggleTaskCompletion(id: number) {
    const newTasks = tasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task);

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const filtrededTasks = tasks.filter(task => task.id !== id);

    setTasks(filtrededTasks);
  }

  return (
    <TaskContainer>
      <TaskGroup>
        <TaskTitle>Minhas tasks</TaskTitle>
        <TaskBox>
          <TaskInput
            placeholder="Faça seu to.do"
            onChangeText={text => setNewTaskTitle(text)}
            value={newTaskTitle}
            multiline={true}
          />
          <TaskButton
            onPress={handleCreateNewTask}
          >
            <Thumbtack width="30" height="30" />
          </TaskButton>
        </TaskBox>
        <TaskBody>
          {tasks.map(task => (
            <View key={task.id}>

              <View style={styles.containerTask}>

                <TouchableWithoutFeedback>
                  <CheckBox
                    onChange={() => handleToggleTaskCompletion(task.id)}
                    value={task.isComplete}
                  />

                </TouchableWithoutFeedback>
                <Text
                  textBreakStrategy={'balanced'}
                  style={{
                    textDecorationLine: task.isComplete ? 'line-through' : 'none',
                    color: task.isComplete ? 'grey' : 'black',
                    fontSize: 18,
                  }}
                >
                  {task.title}
                </Text>
                <TouchableOpacity
                  onPress={() => handleRemoveTask(task.id)}>
                  <Trash style={styles.trash} width="18" height="18" />
                </TouchableOpacity>

              </View>

            </View>
          ))}


        </TaskBody>
      </TaskGroup>
    </TaskContainer >
  );
}

const styles = StyleSheet.create({
  containerTask: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#A09CB1',
  },
  trash: {
    marginLeft: 20,
  },
})

export default TaskList;