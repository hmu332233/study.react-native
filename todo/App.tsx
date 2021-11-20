import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { theme } from './colors';

type Todo = { text: string, work: boolean };

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState('');
  const [toDos, setToDos] = useState({});
  const onChangeText = (text: string) => setText(text);
  const addTodo = () => {
    if (text === '') {
      return;
    }

    setToDos(originTodos => ({ ...originTodos, [Date.now()]: { text, work: working }}));
    setText('');
  }
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
        {Object.entries<Todo>(toDos).map(([key, todo]) => (
          <View key={key} style={styles.toDo}>
            <Text style={styles.toDoText}>{todo.text}</Text>
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
