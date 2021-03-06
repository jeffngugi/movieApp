/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler'
import React from 'react'
import App from './src/App'
import {name as appName} from './app.json';
import {Provider} from 'react-redux'
import store from './src/redux/store'

const AppNew = ()=>
    <Provider store={store}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => AppNew);
