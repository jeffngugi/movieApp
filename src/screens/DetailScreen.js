import React from 'react'
import { StyleSheet, Text, Image, View, SafeAreaView, Dimensions, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { MovieCard } from '../components'
const {width, height} = Dimensions.get("window")
import {images, icons} from '../constants'
import LinearGradient from 'react-native-linear-gradient'
import { Rating, AirbnbRating } from 'react-native-ratings';


const DetailScreen = ({navigation: { goBack }}) => {
    return (
        <SafeAreaView
            style={styles.container}
        >
            <View style={styles.main}>
                <ImageBackground source={images.movie} style={styles.mainImage}>
                    <LinearGradient
                        colors={['transparent',"#070818"]}
                        style={styles.linearGradient}
                    >
                    <TouchableOpacity style={styles.back}
                        onPress={()=>goBack()}
                    >
                        <Image source={icons.back} style={styles.backIcon} resizeMode='contain'/>
                    </TouchableOpacity>
                    <View style={styles.mainContainer}>
                        <Text style={styles.title}>Captain Marvel</Text>
                        <View style={styles.tags}>
                            <Text style={styles.tag}>2019</Text>
                            <Image source={icons.circle} style={styles.circle} />
                            <Text style={styles.tag}>Fantasy/Science Fiction</Text>
                            <Image source={icons.circle} style={styles.circle} />
                            <Text style={styles.tag}>2h 5m</Text>
                        </View>
                        <Text style={styles.description}>
                        Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury,
                        </Text>
                        <View style={styles.reviews}>
                            <AirbnbRating
                                showRating={false}
                                reviewSize={5}
                                count={5}
                                size={13}
                                defaultRating={2}
                                starContainerStyle={{
                                    borderColor:'white',
                                    opacity:2
                                }}
                            />
                        </View>
                        
                    </View>
                    </LinearGradient>
                </ImageBackground>
            </View>
            <View style={styles.others}>
                <Text style={styles.trendingTitle}>Also trending</Text>
                <ScrollView
                    style={styles.trending}
                >
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </ScrollView>
            </View>
            
            
        </SafeAreaView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#070818',
        flex:1
    },
    main:{
        backgroundColor:"white",
        flex:3
    },
    mainImage:{
        flex:1,
    },
    back:{
        paddingTop:10,
        paddingLeft:20
    },
    backIcon:{
        tintColor:'white',
        width:50,
        height:50
    },
    others:{
        flex:2
    },
    trending:{
        padding:10,
        // marginBottom:height/2 + 38
    },
    trendingTitle:{
        fontSize:20,
        color:'white',
        marginLeft:10,
        marginVertical:10,
        fontWeight:"bold"
        
    },
    mainContainer:{
        justifyContent:'flex-end',
        marginHorizontal:20,
        marginTop:"40%"

    },
    title:{
        color:'white',
        fontSize:26,

    },
    tags:{
        flexDirection:'row',
        marginVertical:5,
        alignItems:'center'
    },
    tag:{
        color:'white'
    },
    circle:{
        tintColor:'white',
        height:8,
        width:8,
        marginHorizontal:3
    },
    description:{
        color:'white',
        fontSize:14,
        marginVertical:3
    },
    linearGradient:{
        flex:1
    },
    reviews:{
        alignItems:'flex-start',
        paddingBottom:5,
        marginBottom:10,
        borderRadius:5,
        elevation:2,
        backgroundColor:'gray',
        width:"35%"
    }
})
