import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

import PopularTab from './popular-tab';

export default class Page1 extends Component {
  
  render () {
    return (
      <View style={styles.container}>
        <ScrollableTabView>
          <PopularTab tabLabel='Java'>JAVA</PopularTab>
          <PopularTab tabLabel='Ios'>IOS</PopularTab>
          <PopularTab tabLabel='Android'>ANDROID</PopularTab>
          <PopularTab tabLabel='Javascript'>JAVASCRIPT</PopularTab>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16
  },
});