import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

export default class Page2 extends Component {
  render () {
    const {navigation} = this.props;
  
    return (
      <View style={styles.container}>
        <Text>这是Page2页面</Text>
        <Button
          title="open drawer"
          onPress={() => navigation.openDrawer()}
        />
        <Button
          title="toggle drawer"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hotpink'
  }
})