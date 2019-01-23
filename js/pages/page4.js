import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Page4 extends Component {
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>欢迎page4~~~</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 22
  }
});