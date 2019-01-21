import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

export default class Page2 extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>这是Page2页面</Text>
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
    backgroundColor: 'hotpink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})