import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';

export default class HomePage extends Component {
  render () {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>这是homepage页面</Text>
        <Button
          title="去page1页面"
          onPress={() => navigation.navigate('page1')}
        />
        <Button
          title="去page2页面"
          onPress={() => navigation.push('page2')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})