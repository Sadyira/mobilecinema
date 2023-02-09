import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
//import {DetailMovie} from '/home/sadnena/mobilecinema/componentes/detail.jsx'
//import Constants from 'expo-constans'
import axios from 'axios';
import { keysad } from '../key';
import React, {useEffect, useState} from 'react';
import { AccordionList } from 'accordion-collapse-react-native';
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
  const [id, setId] =useState(null);


    const API_URL = `'https://api.themoviedb.org/3/trending/all/day?api_key='${keysad}`;
    useEffect(()=>{
    const list = async () =>{
      try {
        // let json
         const response = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${keysad}&page=${page}`);
         let aux = response.data
         //let json = await aux.json(
         const saludo = toString(aux)
         console.log("AUX")
         console.log(aux)
         setPeliculas(aux.results)
         console.log('peliculas')
         console.log(peliculas)
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
        
  /*       const Detalle = React.memo(({ id }) => {
        
          useEffect(() => {
             const fetchData =  () => {
              console.log("potato")
                 console.log(id)

            //   try {
            //     console.log("potato")
            //     console.log(id)
            //     const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${keysad}`);
            //     setPelicula(response.data);
            //   } catch (error) {
            //     console.error(error);
            //   }
             };
             fetchData();
          }, [pelicula]);
        
          if (!pelicula) return null;
        
          return (
            <View>
              <Text>reseña: {id.overview}</Text>
            </View>
          );
        });
        const Resena =(id) => {
          useEffect(() => {
          console.log(id.overview)
          return (
            <View><Text>{id.overview}</Text></View>
          )
             }, []);
        }; */
        console.log(peliculas)
        const Header =(pelis)=> {
          console.log('HERE')
          console.log(pelis)
          return(
            <View style={cardstyles.containercard}>
            <View style={cardstyles.card_template}>
              <Image
                 style={cardstyles.card_image}
                 source={{ uri: `https://image.tmdb.org/t/p/original/${pelis.poster_path}`}}
                />
              <View style={cardstyles.text_container}>
                <Text style={cardstyles.card_title}>{pelis.title || pelis.name}</Text>
                </View>
               
            </View>
            </View>
          )
        }
        const Body = (item) => {
          return(  <View style={cardstyles.containercard}>
            <View style={cardstyles.card_template_body} >
            <View style={cardstyles.text_container_body} >
              <Text style={{textAlign:'left', width: 250, justifyContent: 'center', padding: 5, paddingLeft: 20,color: "white" }}>
                {item.overview}</Text>
              <Text style={{textAlign:'center', fontWeight: 'bold',}}>Score:{item.vote_average}</Text>
            </View>
            </View>
            </View>
          )
        }
        const cardstyles = StyleSheet.create({
          containercard:{
            flex: 1,

            paddingBottom: 5,
            paddingLeft: 15
          },
          card_template_body:{
            width: 300,
            paddingLeft:15,
            paddingTop:6,
            position: 'relative'
          },
          card_template:{
            width: 300,
            height: 350,
            padding:15,
            position: 'relative'
            
          },
          card_image: {
            width: 250,
            height: 300,
            boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
            borderRadius : 10,
            justifyContent: "left",
            alignItems: "left",
            position: 'relative'
          },
          text_container_body:{
            position: "relative",
            width: 250,
            bottom:0,
            padding: 5,
            paddingTop:15,
            backgroundColor: "rgba(0,0,0, 0.3)",
            borderBottomLeftRadius : 10,
            borderBottomRightRadius: 10,
            justifyContent: "right",
            alignItems: "right",
            
          },
          text_container:{
            position: "relative",
            width: 250,
            height: 40,
            bottom:0,
            padding: 5,
            backgroundColor: "rgba(0,0,0, 0.3)",
            borderBottomLeftRadius : 10,
            borderBottomRightRadius: 10,
            justifyContent: "center",
            alignItems: "right",
            
          },
          card_title: {
             color: "white",
            fontSize: 14,
            fontWeight: 'bold'
          }
        });
        
      return (
        
         <View>
          <AccordionList
          list={peliculas}
          header={(item, index) => Header(item)}
          body={(item, index) => Body(item)}
/>

                  {/* <FlatList 
        data = {peliculas}
        keyExtractor={(item, index)=> String(index)}
        ListHeaderComponent={<Text>Peliculas</Text>}
        renderItem={({ item, index }) => (
        //   <View>
        //     <TouchableOpacity onPress={()=>setId(item)} activeOpacity={0.7}>
        //       <Text style={stylesImage.container}>{item.title || item.name}</Text>
        //     </TouchableOpacity>
        //     < Resena id={item}/>
            
        //   <Image
        //   style={stylesImage.image}
        //   source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`}}
        //  />
        //   </View>
        <View>
            <TouchableOpacity id={item.id} onPress={() => setPelicula(item)} activeOpacity={0.7}>
              <Text style={stylesImage.container}>{item.title || item.name}</Text>
            </TouchableOpacity>
          <Image
          style={stylesImage.image}
          source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`}}
         /> */}
         
         {/* // </View>
          
                       
        //)}/> */}
         
         <View style={{display:'flex', flexDirection: 'row', justifyContent:'space-between', padding:15}}>
         <TouchableOpacity
        onPress={() => setPage(page + 1)}
        activeOpacity={0.7}
        style={{ padding: 10, backgroundColor: "rgba(0,0,0, 0.3)", width: 100, alignSelf: 'flex-end', alignItems: 'center'}}
      >
        <Text style={{ fontWeight: 'bold'}}>siguiente</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => page>1? setPage(page - 1): setPage(1)}
        activeOpacity={0.7}
        style={{ padding: 10, backgroundColor: "rgba(0,0,0, 0.3)", width: 100, alignSelf: 'flex-start',  alignItems: 'center' }}
      >
        <Text style={{ fontWeight: 'bold'}}>volver</Text>
      </TouchableOpacity>
      </View>
       </View>)
}