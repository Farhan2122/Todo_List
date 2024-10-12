// screens/HomeScreen.tsx
import React, { Dispatch, SetStateAction, useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './_layout';

interface HomeScreenProps extends NativeStackScreenProps<RootStackParamList, 'home'> {
  tasks: string[];
  setTasks: Dispatch<SetStateAction<string[]>>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, tasks, setTasks }) => {
  const [text, setText] = useState<string>("");

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, text]); // Add task to the task list
      setText(""); // Clear input field
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter Task"
      />
      <Pressable style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.viewTasksButton]}
        onPress={() => navigation.navigate('tasksList', { tasks })}
      >
        <Text style={styles.buttonText}>View Tasks</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    width: '60%',
    padding: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  viewTasksButton: {
    backgroundColor: 'green',
    marginTop: 20,
  },
});
