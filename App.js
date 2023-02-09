import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { Trending } from './componentes/Trending';
import SearchBar from './componentes/detail';
import Header from './componentes/header.jsx';

//import Trending from '/home/sadnena/mobilecinema/componentes/Trending.jsx';
//import detail from './componentes/detail';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Trending/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0,0,0, 0.1)",

  },
});
