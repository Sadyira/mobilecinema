import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import axios from 'axios';
import { keysad } from '../key';
import React, {useEffect, useState} from 'react';
import { AccordionList } from 'accordion-collapse-react-native';
export const Trending =  () =>{
  const [page, setPage] = useState(1);
  const [peliculas, setPeliculas] = useState(null);
    useEffect(()=>{
    const list = async () =>{
      try {
         const response = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${keysad}&page=${page}`);
         let aux = response.data
         setPeliculas(aux.results) 
      } catch (error) {
        console.error(error);
      }
    }
    list()}, [page]);
        const Header =(pelis)=> {
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
        const stylesb = StyleSheet.create({
          loadingContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
        });
        const cardstyles = StyleSheet.create({
          containercard:{
            flex: 1,
            paddingBottom: 5,
            paddingLeft: 15,
            paddingTop:7
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
            justifyContent: "center",
            alignItems: "center",
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
            justifyContent: "center",
            alignItems: "center",
            
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
            alignItems: "center",
            
          },
          card_title: {
             color: "white",
            fontSize: 14,
            fontWeight: 'bold'
          }
        });
        
      return (
        
      <View>
        <View style={{ paddingTop: 40, alignItems: 'center'}}>
        <Text style={{alignSelf: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: "rgba(0,0,0, 0.5)",}}>Trending Movies</Text>
        </View>

          <AccordionList
          list={peliculas}
          header={(item, index) => Header(item)}
          body={(item, index) => Body(item)}
          />
         <View style={{display:'flex', flexDirection: 'row', justifyContent:'space-between', padding:15}}>
            <TouchableOpacity onPress={() => page>1? setPage(page - 1): setPage(1)} activeOpacity={0.7} style={{ padding: 10, 
            backgroundColor: "rgba(0,0,0, 0.3)", width: 100, alignSelf: 'flex-start', alignItems: 'center'}}>
              <Text style={{ fontWeight: 'bold'}}>volver</Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={() => setPage(page + 1)} activeOpacity={0.7} style={{ padding: 10, 
            backgroundColor: "rgba(0,0,0, 0.3)", width: 100, alignSelf: 'flex-end',  alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold'}}>siguiente</Text>
          </TouchableOpacity>
         </View>
      </View>)};