import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import {headerBackgroundColor} from '../../common/theme-colors';

export default class ScrollItem extends Component {
  render () {
    return (
        <TouchableHighlight style={styles.touch} underlayColor={'#eee'} {...this.props.sortHandlers}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require('../../../resource/img/ic_sort.png')}
            />
            <Text style={styles.text}>{this.props.data}</Text>
          </View>
        </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  touch: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20
  },
  image: {
    width: 16,
    height: 16,
    marginRight: 10,
    tintColor: headerBackgroundColor
  }
});