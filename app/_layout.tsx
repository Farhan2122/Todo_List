// App.tsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';
import TasksScreen from './tasksList';

export type RootStackParamList = {
  Home: undefined;
  Tasks: { tasks: string[] };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
      <Stack.Navigator>
        <Stack.Screen name="home">
          {props => <HomeScreen {...props} tasks={tasks} setTasks={setTasks} />}
        </Stack.Screen>
        <Stack.Screen name="tasksList">
          {props => <TasksScreen {...props} tasks={tasks} setTasks={setTasks} />}
        </Stack.Screen>
      </Stack.Navigator>
    
  );
}
