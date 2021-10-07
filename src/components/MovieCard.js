import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {icons, images} from '../constants'
import {Rating, AirbnbRating} from 'react-native-ratings'
const POSTER_URL = "http://image.tmdb.org/t/p/w185"

const MovieCard = ({navigation, movie, index, home}) => {
    const {original_title, vote_average,poster_path, id} = movie
    const imgUri =POSTER_URL+poster_path
    // const imgUri = "http://image.tmdb.org/t/p/w185/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"
    return (
        <TouchableOpacity
           onPress={()=>navigation.navigate('Detail',{itemID:id, movie:movie})}
           style={{backgroundColor:home && index == 0 ? "#007CFF":"#1B1C2A",
                    ...styles.container, 
                }}>
            <View style={styles.imageContainer}> 
                <Image
                    source={{uri:imgUri}}
                    style={styles.image}
                />
            </View>
            <View style={styles.info}>
                {
                   home && index == 0 &&  ( <View style={styles.topMovie}>
                        <Image source={icons.medal}
                            style={styles.topIcon}
                        />
                        <Text style={styles.topText}>Top Movie this week</Text>
                    </View>)
                }
                
               <Text style={styles.title}>{original_title}</Text>
               <Text style={styles.genre}>Fantasy/Action</Text>
               <Text style={styles.year}>2019</Text>
               <View style={styles.rating}>
               <AirbnbRating
                    showRating={false}
                    reviewSize={5}
                    count={5}
                    size={8}
                    defaultRating={vote_average/2}
                    starContainerStyle={{
                        borderColor:'white',
                        opacity:2
                    }}
                    ratingContainerStyle={{
                        opacity:5
                    }}
                />
            </View>
            </View>
            
        </TouchableOpacity>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    container:{
        // backgroundColor:index == 0? "#007CFF":"#1B1C2A",
        flexDirection:'row',
        borderRadius:10, 
        marginVertical:5
    },
    imageContainer:{
        flex:34,
        borderRadius:10
    },
    image:{
        height:145,
        width:"100%",
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10
    },
    info:{
        flex:66,
        padding:15
    },
    topMovie:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:1
    },
    topIcon:{
        width:20,
        height:20,
        tintColor:'yellow',
        marginRight:6
    },
    topText:{
        color:'white',
        fontSize:16,
        flex:1
    },
    title:{
        color:'white',
        marginVertical:5,
        fontWeight:'bold',
        fontSize:18,
        marginVertical:1
    },
    genre:{
        color:'white',
        fontSize:14,
        marginVertical:1
    },
    year:{
        color:'white',
        fontSize:16,
        marginVertical:1
    },
    rating:{
        elevation:1,
        backgroundColor:'black',
        marginHorizontal:2,
        borderRadius:5,
        flexDirection:'row',
        width:"35%"
    }

})
