import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Welcome extends Component {
  static navigationOptions = {
    title: '欢迎'
  }
  
  componentDidMount () {
    //模拟加载数据
    this.timer = setTimeout(() => {
      this.props.navigation.reset([NavigationActions.navigate({ routeName: 'HomePage' })], 0)
    }, 2000)
  }
  
  componentWillUnmount () {
    this.timer && clearTimeout(this.timer);
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>欢迎~~~</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 22
  }
});