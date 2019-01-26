import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';

export default class Page4 extends Component {
  
  render () {
    return (
      <View style={styles.container}>
        <Button
          title='自定义标签'
          onPress={() => this.props.navigation.navigate('CustomTag')}
        />
        <Button
          style={{marginTop: 10}}
          title='标签排序'
          onPress={() => this.props.navigation.navigate('SortTag')}
        />
        <Button
          style={{marginTop: 10}}
          title='test'
          onPress={() => this.props.navigation.navigate('Test')}
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