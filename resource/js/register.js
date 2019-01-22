import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
} from 'react-native';

export default class Register extends Component {
  
  
  render () {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>这是注册页面</Text>
        <Button
          title="回到上一页? 不好意思不行"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="回到首页"
          onPress={() => navigation.navigate('Home')}
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