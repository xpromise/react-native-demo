/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createDrawerNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Page1 from './resource/js/page1';
import Page2 from './resource/js/page2';
import HomePage from './resource/js/home-page';

const DrawerNavigator = createDrawerNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      drawerLabel: 'Page1',
      drawerIcon: ({tintColor}) => (
        <MaterialIcon
          name='explore'
          size={24}
          style={{color: tintColor}}
        />
      )
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      drawerLabel: 'Page2',
      drawerIcon: ({tintColor}) => (
        <MaterialIcon
          name='account-circle'
          size={24}
          style={{color: tintColor}}
        />
      )
    }
  },
})

const AppNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      headerTitle: '首页'
    }
  },
  DrawNav: {
    screen: DrawerNavigator,
    navigationOptions: {
      headerTitle: 'DrawNavigator'
    }
  }
})

export default createAppContainer(AppNavigator);