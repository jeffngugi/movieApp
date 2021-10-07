import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import RootNavigation from './navigation/RootNavigation'
import SplashScreen from 'react-native-splash-screen'
import {getTrending} from './redux/actions/movieAction'
import {useDispatch} from 'react-redux'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        SplashScreen.hide()
        async function anyNameFunction() {
        //   await dispatch(getTrending())
          SplashScreen.hide()
        }
        // anyNameFunction();
      }, []);
    return (
       <NavigationContainer>
           <RootNavigation />
       </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})
