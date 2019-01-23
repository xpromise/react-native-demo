/**
 加载路由配置
 */

import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';

import Root from './js/pages/setup';
import WelcomePage from './js/pages/welcome-page';
import Page1 from './js/pages/page1';
import Page2 from './js/pages/page2';
import Page3 from './js/pages/page3';
import Page4 from './js/pages/page4';

const HomePage = createBottomTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => {
        console.log(tintColor);
        return (
          <Image
            source={require('./resource/images/ic_polular.png')}
            style={[styles.image, {tintColor}]}
          />
        )
      },
      tabBarOptions: {
        activeTintColor: 'pink'
      }
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <Image
          source={require('./resource/images/ic_trending.png')}
          style={[styles.image, {tintColor}]}
        />
      ),
      tabBarOptions: {
        activeTintColor: 'deeppink'
      }
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <Image
          source={require('./resource/images/ic_star.png')}
          style={[styles.image, {tintColor}]}
        />
      ),
      tabBarOptions: {
        activeTintColor: 'hotpink'
      }
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <Image
          source={require('./resource/images/ic_my.png')}
          style={[styles.image, {tintColor}]}
        />
      ),
      tabBarOptions: {
        activeTintColor: 'blue'
      }
    }
  },
}, {
  initialRouteName: 'Page1',
  defaultNavigationOptions: {
    header: null,
  }
})

export default createAppContainer(createStackNavigator({
  Root: Root,
  WelcomePage: WelcomePage,
  HomePage: HomePage
}, {
  initialRouteName: 'Root',
  defaultNavigationOptions: {
    header: null
  }
}))

const styles = StyleSheet.create({
  image: {
    width: 26,
    height: 26
  }
})
