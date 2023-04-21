import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    
    <View style={styles.container}>
    <img src="https://1000logos.net/wp-content/uploads/2020/10/Duolingo-logo.png" style={styles.duologo}></img>
      <Text style={styles.paragraph}>
      Learn a language for free.
      Forever.
      </Text>
    <View style={styles.buttons}>
    <button type="button" class="buttonOne" style={styles.buttonOne}>GET STARTED</button>
    <button type="button" class="buttonTwo" style={styles.buttonTwo}>I ALREADY HAVE AN ACCOUNT</button>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  duologo: {
    marginTop: 140,
    padding: 70,
    paddingBottom: 0,
    justifyContent: 'center',
  },
  paragraph: {
    marginTop: -170,
    margin: 40,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
    fontFamily: 'Calibri',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFF',
    padding: 10,
  },
  buttonOne: {
    padding: 15,
    margin: 10,
    backgroundColor: '#649900',
    color: 'White',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#457500'
  },
  buttonTwo: {
    padding: 15,
    margin: 10,
    marginBottom: 10,
    color: '#77944E',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A8A8A8'
  },
});
