/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import Home from './resource/js/home';
import Login from './resource/js/login';
import Register from './resource/js/register';

const AppMaterialTopNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register'
    }
  },
}, {
  initialRouteName: 'Home'
})

export default createAppContainer(AppMaterialTopNavigator);