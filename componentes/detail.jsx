import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TouchableNativeFeedback} from 'react-native';

//import Constants from 'expo-constans'
import axios from 'axios';
import { keysad } from '../key';
import React, {useEffect, useState} from 'react';
export const DetailMovie=(id, keysad) =>{
    const [pelicula, setPelicula] = useState(null);
    useEffect((id, keysad)=>{
    const detalle = async (id, keysad) =>{
      try {
         const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${keysad}`);
         let aux = response.data
        setPelicula(aux)
        
      } catch (error) {
        console.error(error);
        
    
      }
    }
    detalle()}, [])
    return(
        <View>
            <Text>{pelicula.overview}</Text>
        </View>
    )};