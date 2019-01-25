import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Page4 extends Component {
  
  render () {
    return (
      <View style={styles.container}>
        <Button
          title='自定义标签'
          onPress={() => this.props.navigation.navigate('CustomTag')}
        />
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