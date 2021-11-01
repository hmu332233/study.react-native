import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Example1 = () => {
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

const Example2 = () => {
  return (
    // react-native의 layout 시스템은 기본적으로 flex와 같음
    // flex direction의 기본값은 column
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'red'}}></View>
      <View style={{ flex: 1, backgroundColor: 'blue'}}></View>
      <View style={{ flex: 1, backgroundColor: 'yellow'}}></View>
    </View>
  );
};

export default function App() {
  return (
    // <Example1 />
    <Example2 />
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
