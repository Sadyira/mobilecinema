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

    backgroundColor: 'rgba(0,0,0,0.3)',
    height: 20,
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
   
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;