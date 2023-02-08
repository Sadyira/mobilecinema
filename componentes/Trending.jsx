import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
//import {DetailMovie} from '/home/sadnena/mobilecinema/componentes/detail.jsx'
//import Constants from 'expo-constans'
import axios from 'axios';
import { keysad } from '../key';
import React, {useEffect, useState} from 'react';
const stylesb = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
});
const stylesImage = StyleSheet.create({
  container: {
    alignItems: 'left',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export const Trending =  () =>{
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [peliculas, setPeliculas] = useState(null);
  const [pelicula, setPelicula] = useState(null);


    const API_URL = `'https://api.themoviedb.org/3/trending/all/day?api_key='${keysad}`;
    useEffect(()=>{
    const list = async () =>{
      try {
        // let json
         const response = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${keysad}&page=${page}`);
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
    list()}, [page])
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
        const detalle = async (id) =>{
          try {
             const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${keysad}`);
             let aux = response.data
            setPelicula(aux)
            
          } catch (error) {
            console.error(error);
            
        
          }
        return(
            <View>
                <Text>{pelicula.overview}</Text>
            </View>
        )}

        
      return (
        
         <View>
                  <FlatList 
        data = {peliculas}
        keyExtractor={(item, index)=> String(index)}
        ListHeaderComponent={<Text>Peliculas</Text>}
        renderItem={({item, index})=>(
          <View>
           <TouchableOpacity
            onPress={detalle(item.id)}
            activeOpacity={0.7}>
          <Text style={stylesImage.container}>{item.title || item.name}</Text>
           </TouchableOpacity> 
           <Text>{item.overview}</Text>
          <Image
          style={stylesImage.image}
          source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`}}
         /> 
          </View>
                       
        )}/>
         <TouchableOpacity
        onPress={() => setPage(page + 1)}
        activeOpacity={0.7}
        style={{ padding: 10, backgroundColor: '#DDDDDD' }}
      >
        <Text style={{ fontWeight: 'bold' }}>siguiente</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => page>1? setPage(page - 1): setPage(1)}
        activeOpacity={0.7}
        style={{ padding: 10, backgroundColor: '#DDDDDD' }}
      >
        <Text style={{ fontWeight: 'bold' }}>volver</Text>
      </TouchableOpacity>
  
       </View>)
}