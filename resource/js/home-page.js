import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class HomePage extends Component {
  
  render () {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>欢迎来到首页</Text>
        <Button
          title='跳转page1'
          onPress={() => navigation.navigate('Page1')}
        />
        <Button
          title='跳转page2'
          onPress={() => navigation.navigate('Page2')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  }
})