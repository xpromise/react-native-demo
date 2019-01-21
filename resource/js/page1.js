import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

export default class Page1 extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>这是Page1页面</Text>
        <Button
          title="回到首页"
          onPress={() => this.props.navigation.goBack()}
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