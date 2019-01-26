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
import CustomTag from './js/pages/my/custom-tag';
import SortTag from './js/pages/my/sort-tag';
import {headerBackgroundColor} from './js/common/theme-colors';

import Test from './js/pages/test';


const HomePage = createBottomTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => {
        return (
          <Image
            source={require('./resource/images/ic_polular.png')}
            style={[styles.image, {tintColor}]}
          />
        )
      },
      // tabBarOptions: {
      //   activeTintColor: 'pink'
      // }
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
      // tabBarOptions: {
      //   activeTintColor: 'deeppink'
      // }
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
      // tabBarOptions: {
      //   activeTintColor: 'hotpink'
      // }
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
      // tabBarOptions: {
      //   activeTintColor: 'blue'
      // }
    }
  },
}, {
  initialRouteName: 'Page1',
  defaultNavigationOptions: {
    tabBarOptions: {
      activeTintColor: headerBackgroundColor
    }
  }
})

export default createAppContainer(createStackNavigator({
  Root: {
    screen: Root,
    navigationOptions: {
      header: null
    }
  },
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null
    }
  },
  HomePage: {
    screen: HomePage,
    navigationOptions: ({navigation}) => {
      const {routes, index} = navigation.state;
      const routeName = routes[index].routeName;
      let title = '最热';
      
      if (routeName === 'Page2') {
        title = '趋势'
      } else if (routeName === 'Page3') {
        title = '收藏'
      } else if (routeName === 'Page4') {
        title = '我的'
      }
      
      return {
        title,
        headerTitleStyle: {
          flex: 1,
          textAlign: 'center',
          color: '#fff'
        },
        headerStyle: {
          backgroundColor: headerBackgroundColor
        }
      }
    }
  },
  CustomTag: {
    screen: CustomTag,
  },
  SortTag: {
    screen: SortTag,
  },
  Test: Test
}, {
  initialRouteName: 'Root'
}))

const styles = StyleSheet.create({
  image: {
    width: 26,
    height: 26
  }
})
