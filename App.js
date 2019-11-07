import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentScreen from './screens/ComponentScreen';
import StudentScreen from './screens/StudentScreen';
import CobaScreen from './screens/CobaScreen';

export default function App() {
  return (
    
      <CobaScreen /> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
