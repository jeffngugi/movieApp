import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {icons, images} from '../constants'
import {Rating, AirbnbRating} from 'react-native-ratings'

const MovieCard = ({navigation}) => {
    return (
        <TouchableOpacity
           onPress={()=>navigation.navigate('Detail')}
           style={styles.container}>
            <View style={styles.imageContainer}> 
                <Image
                    source={images.movie}
                    style={styles.image}
                />
            </View>
            <View style={styles.info}>
                <View style={styles.topMovie}>

                    <Image source={icons.medal}
                           style={styles.topIcon}
                    />
                <Text style={styles.topText}>Top Movie this week</Text>
                </View>
               <Text style={styles.title}>How to Train your Dragon: The Hidden World</Text>
               <Text style={styles.genre}>Fantasy/Action</Text>
               <Text style={styles.year}>2019</Text>
               <View style={styles.rating}>
               <AirbnbRating
                    showRating={false}
                    reviewSize={5}
                    count={5}
                    size={8}
                    defaultRating={2}
                    starContainerStyle={{
                        borderColor:'white',
                        opacity:2
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
        backgroundColor:'#1B1C2A',
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
