import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { theme } from './colors';

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingVertical: 20,
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
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    fontSize: 18,
  }
});
