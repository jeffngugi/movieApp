import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {DetailScreen, ListScreen} from '../screens'

const Stack = createStackNavigator()

const RootNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
            
        >
            <Stack.Screen
                name='List'
                component={ListScreen}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
            />
        </Stack.Navigator>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
