import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

export default class Home extends Component {
  
  render () {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>这是Page1页面</Text>
        <Button
          title="登录？"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="注册？"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deeppink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})