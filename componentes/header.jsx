import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './detail';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Trending Movies</Text>
      {/* <SearchBar/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display:'flex', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: 50,
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Arial',
  },
});

export default Header;