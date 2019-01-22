import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Home extends Component {
  render () {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>这是首页~</Text>
        <Button
          title='点击跳转flatList页面'
          onPress={() => navigation.navigate('FlatListDemo')}
        />
        <Button
          title='点击跳转swipeableFlatList页面'SwipeableFlatListDemo
          onPress={() => navigation.navigate('SwipeableFlatListDemo')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 22,
    marginBottom: 10
  }
})
