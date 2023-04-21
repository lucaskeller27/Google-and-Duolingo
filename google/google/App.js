import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <div style={{position: 'fixed', top: '10px', right: '10px', display: 'flex'}}>
  <i className="fas fa-search" style={{marginRight: '10px'}}> <Image style={styles.info} source="https://cdn-icons-png.flaticon.com/512/3566/3566345.png"/></i>
  <i className="fas fa-bars"> <Image style={styles.camera} source="https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Submenu_2-512.png"/></i>
    </div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" style={styles.logo}></img>
      <input type="search" placeholder="Search or type URL" style={styles.searchbar}></input>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'White',
    padding: 8,
  },
  logo: {
    padding: 30,
  },
  camera: {
    height: 30,
    width: 30,
  },
  info: {
    height: 30,
    width: 30,
  },
  searchbar: {
    padding: 15,
    margin: 10,
    color: 'White',
    borderRadius: 1,
    borderWidth: 1,
  }
});
