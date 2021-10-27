import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // View - container 역할
    <View style={styles.container}> 
      {/* 모든 text는 Text 컴포넌트에 들어가야함 */}
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text>Hello!</Text>
      {/* 실제로 화면에 표시되는게 아닌 시스템 상태바와 소통할 수 있는 수단 */}
      <StatusBar style="auto" /> 
    </View>
  );
}

// style의 object를 만듦
// StyleSheet.create을 통해서 만들면 자동완성을 편하게 사용 가능
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  }
});
