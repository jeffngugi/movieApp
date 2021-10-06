import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView} from 'react-native'
import {icons} from '../constants/index'
import {MovieCard} from '../components'

const ListScreen = ({navigation}) => {
    const renderHeader = ()=>{
        return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Top Movies</Text>
            <View style={styles.search}>
                <Image
                    source={icons.search}
                    style={styles.searchIcon}
                />
            </View>
        </View>
        )
    }
    return (
        <SafeAreaView
            style={styles.container}
        >
            {renderHeader()}
            <ScrollView showsHorizontalScrollIndicator={false}>
            <MovieCard navigation={navigation}/>
            <MovieCard navigation={navigation}/>
            <MovieCard navigation={navigation}/>
            <MovieCard navigation={navigation}/>
            <MovieCard navigation={navigation}/>
            <MovieCard navigation={navigation}/>
            <MovieCard navigation={navigation}/>
            <MovieCard navigation={navigation}/>
            <MovieCard navigation={navigation}/>
            </ScrollView>
           
        </SafeAreaView>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#070818",
        flex:1,
        paddingHorizontal:16
    },
    headerContainer:{
        marginTop:20,
        marginBottom:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'


    },
    headerText:{
        color:'white',
        fontWeight:'800',
        fontSize:32
    },
    search:{
        alignItems:'center',
        justifyContent:'center',
        marginRight:20
    },
    searchIcon:{
        width:25,
        height:25,
        tintColor:'white'
    }
})
