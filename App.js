/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Page1 from './resource/js/page1';
import Page2 from './resource/js/page2';
import Page3 from './resource/js/page3';
import TabBarComponent from './resource/js/tab-bar-component';

const AppTabNavigator = createBottomTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'Page1',
      tabBarIcon: ({tintColor, focused}) => (
        <Icon
          name='home'
          size={26}
          style={{color: tintColor}}
        />
      )
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: 'Page2',
      tabBarIcon: ({tintColor, focused}) => (
        <Icon
          name='shoppingcart'
          size={26}
          style={{color: tintColor}}
        />
      )
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: 'Page3',
      tabBarIcon: ({tintColor, focused}) => (
        <Icon
          name='search1'
          size={26}
          style={{color: tintColor}}
        />
      )
    }
  },
}, {
  tabBarComponent: TabBarComponent,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? 'deeppink' : 'blue'
  }
})

export default createAppContainer(AppTabNavigator);