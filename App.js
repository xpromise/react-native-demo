/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomePage from './resource/js/home-page';
import Page1 from './resource/js/page1';
import Page2 from './resource/js/page2';

const AppNavigator = createStackNavigator({
  homePage: HomePage,
  page1: {
    screen: Page1,
    navigationOptions: {
      header: null
    }
  },
  page2: Page2
}, {
  /*navigationOptions: {
    header: null
  }*/
})

export default createAppContainer(AppNavigator);