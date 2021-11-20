import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { theme } from './colors';

import { Fontisto } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

type Todo = { text: string, working: boolean };
type TodoState = { [key: string]: Todo };

const STORAGE_KEY = '@TODOS'
const saveToDos = async (toDoState: TodoState) => {
  try {
    const jsonValue = JSON.stringify(toDoState)
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
  } catch (e) {
    // saving error
  }
}
const loadToDos = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}

export default function App() {
  const mounted = useRef<boolean>();
  const [working, setWorking] = useState(true);
  const [text, setText] = useState('');
  const [toDos, setToDos] = useState<TodoState>({});
  const onChangeText = (text: string) => setText(text);
  const addTodo = () => {
    if (text === '') {
      return;
    }

    setToDos(originTodos => ({ ...originTodos, [Date.now()]: { text, working } }));
    setText('');
  }
  const deleteTodo = (key: string) => {


    Alert.alert(
      "Delete To Do",
      "Are you sure?",
      [
        {
          text: "Cancel",
          style: "destructive"
        },
        {
          text: "OK",
          onPress: () => {
            const newToDos = { ...toDos };
            delete newToDos[key];
            setToDos(newToDos);
          }
        }
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    (async () => {
      const toDos = await loadToDos();
      setToDos(toDos);
    })();
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    saveToDos(toDos);
  }, [toDos])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        {/* 눌렀을때 opacity 효과를 줌 */}
        <TouchableOpacity onPress={() => setWorking(true)}>
          <Text style={{ ...styles.btnText, color: working ? 'white' : theme.grey }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setWorking(false)}>
          <Text style={{ ...styles.btnText, color: working ? theme.grey : 'white' }}>Travel</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input} placeholder={working ? 'Add a To Do' : 'Where do you want to go?'} value={text} onChangeText={onChangeText} onSubmitEditing={addTodo} returnKeyType="done" />
      <ScrollView>
        {Object.entries<Todo>(toDos).filter(([key, todo]) => todo.working === working).map(([key, todo]) => (
          <View key={key} style={styles.toDo}>
            <Text style={styles.toDoText}>{todo.text}</Text>
            <TouchableOpacity onPress={() => deleteTodo(key)}>
              <Fontisto name="trash" size={18} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: '600',
    color: 'white'
  },
  input: {
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    fontSize: 18,
  },
  toDo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  toDoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  }
});
