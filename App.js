/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import FlatListDemo from './resource/js/flat-list-demo';
import SwipeableFlatListDemo from './resource/js/swipeable-flat-list-demo';
import Home from './resource/js/home';

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  FlatListDemo: {
    screen: FlatListDemo,
    navigationOptions: {
      title: 'FlatListDemo'
    }
  },
  SwipeableFlatListDemo: {
    screen: SwipeableFlatListDemo,
    navigationOptions: {
      title: 'SwipeableFlatListDemo'
    }
  },
}, {
  initialRouteName: 'Home'
})

export default createAppContainer(AppStackNavigator);