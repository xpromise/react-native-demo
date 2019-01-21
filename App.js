/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomePage from './resource/js/home-page';
import Page1 from './resource/js/page1';
import Page2 from './resource/js/page2';
import Page3 from './resource/js/page3';

const AppNavigator = createStackNavigator({
  homePage: {
    screen: HomePage,
    navigationOptions: {
      title: 'Home'
    }
  },
  page1: {
    screen: Page1,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.name
    })
  },
  page2: Page2,
  page3: {
    screen: Page3,
    navigationOptions: ({navigation}) => {
      const {state, setParams} = navigation;
      const {params} = state;
      return {
        title: params.title ? params.title : 'This is page3',
        headerRight: (
          <Button
            title={params.mode === 'edit' ? '保存' : '编辑'}
            onPress={() => setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
          />
        )
      }
    }
  },
}, {
  /*navigationOptions: {
    header: null
  }*/
})

export default createAppContainer(AppNavigator);