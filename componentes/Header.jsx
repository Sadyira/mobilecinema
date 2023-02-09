import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './Searchbar';

const Header = () => {
  return (
    <View style={stylesHeader.headerContainer}>
      <Text style={stylesHeader.headerText}>Trending Movies</Text>
      {/* <SearchBar/> */}
    </View>
  );
};

const stylesHeader = StyleSheet.create({
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