import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { Trending } from './componentes/Trending';
import { DetailMovie } from './componentes/detail';

//import Trending from '/home/sadnena/mobilecinema/componentes/Trending.jsx';
//import detail from './componentes/detail';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>
        Hola mundo
      </Text> */}
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
  },
});
