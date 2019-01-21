import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

export default class Page2 extends Component {
  static navigationOptions = {
    title: 'page2'
  }
  render () {
    const {navigation} = this.props;
  
    return (
      <View style={styles.container}>
        <Text>这是Page2页面</Text>
        <Button
          title="回到首页"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="改变主题"
          onPress={() => {
            navigation.setParams({
              theme: {
                tintColor: 'blue',
                updateTime: Date.now()
              }
            })
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hotpink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})