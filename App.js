import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Button, TextInput, Text } from 'react-native';
import WordDetails from './WordDetails';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Dictionary</Text>
      </View>
      <View
        style={styles.divider}
      />
      <WordDetails />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginRight: 50,
    marginLeft: 30,
    marginTop: 50,
  },

  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },

  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  }
});


export default App;

