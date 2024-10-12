// screens/TasksScreen.tsx
import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import { RootStackParamList } from './_layout';

interface TasksScreenProps extends NativeStackScreenProps<RootStackParamList, 'taskList'> {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const TasksScreen: React.FC<TasksScreenProps> = ({ tasks, setTasks }) => {
  // Function to delete a task by index
  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks); // Update the task list
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <Pressable onPress={() => deleteTask(index)}>
              <AntDesign name="delete" size={24} color="red" />
            </Pressable>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>No tasks added yet!</Text>}
      />
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  taskText: {
    fontSize: 18,
  },
});
