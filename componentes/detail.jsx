import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { keysad } from '../key';
import{Feather} from '@expo/vector-icons'

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${keysad}&query=${query}`);
      const data = await response.json();
      setResults(data.results);
      console.log('here')
      console.log(results)
    } catch (error) {
      console.error(error);
    }
  };
  const clear = () => {
    setQuery('');
    setResults([]);
  };
  return (
    <View>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="Search Movie Score"
        clearButtonMode="while-editing"
        onSubmitEditing={search}
        renderRightAccessory={() => (
          <TouchableOpacity onPress={clear}>
            <Text style={{fontSize:'10', fontWeight:'bold'}}>cancel</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={search}>
        <Feather 
        name='search'
        size={15}
        color='white'
        style={{marginLeft: 1, alignSelf: 'center', paddingBottom: 3}}/>
      </TouchableOpacity>
      
      </View>
      {results.map(result => (
        <View key={result.id} style={styles.result}>
          <Text style={styles.resultText}>{result.title || result.name}</Text>
          <Text style={styles.resultText}>Score:{result.vote_average}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '65%',
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
  },
  button: {
    width:50,
    height: 30,
    backgroundColor: "rgba(0,0,0, 0.3)",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  result: {
    width: '50%',
    marginVertical: 10,
  },
  resultText: {
    textAlign: 'center',
  },
});

export default SearchBar;
