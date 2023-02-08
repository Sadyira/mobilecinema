import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, Touchable, } from 'react-native';
//import Constants from 'expo-constans'
import axios from 'axios';
import { keysad } from '../key';
import React, {useEffect, useState} from 'react';
const stylesb = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Trending =  () =>{
  const [isLoading, setIsLoading] = useState(true);
  const [peliculas, setPeliculas] = useState(null);

    const API_URL = `'https://api.themoviedb.org/3/trending/all/day?api_key='${keysad}`;
    useEffect(()=>{
    const list = async () =>{
      try {
        // let json
         const response = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${keysad}`);
         let aux = response.data
         //let json = await aux.json(
         const saludo = toString(aux)
        setPeliculas(aux.results)
        // if (response !== null && response !== undefined){
        //   /* json = response.json() */
        //   setPeliculas({'results':[{'title':'oso'},{'title':'casa'}]})
          
        // }else{return ( <View style={stylesb.loadingContainer}>
        //   <Text>Error carga archivos</Text>
        // </View>)} 
        // if(peliculas !== undefined){
        //   setIsLoading(false)
        // }
        
      } catch (error) {
        console.error(error);
        
    
      }
    }
    list()}, [])
    ;
 
    // if(peliculas !== undefined && peliculas !== null){datos=peliculas.results.map(movie => movie.title)}
    // else {datos= []}
  
        // if (isLoading === true) {
        //   return (
        //     <View style={stylesb.loadingContainer}>
        //       <Text>cargando</Text>
        //     </View>
        //   );
        // }


      return (
        
         <View>
                  <FlatList
        data = {peliculas}
        keyExtractor={(item, index)=> String(index)}
        ListHeaderComponent={<Text>Peliculas</Text>}
        renderItem={({item, index})=>{
          return <Text>{item.title}</Text>
        }}/>
  
       </View>)
}