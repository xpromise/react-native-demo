import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Page3 extends Component {
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>欢迎page3~~~</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 22
  }
});