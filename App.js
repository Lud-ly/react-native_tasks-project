import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from './src/components/_Shared/Header';
import TasksContainer from './src/components/TasksEpic/TasksContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TasksContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
