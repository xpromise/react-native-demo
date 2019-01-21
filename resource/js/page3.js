import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  TextInput
} from 'react-native';

export default class Page2 extends Component {
  
  render () {
    const {navigation} = this.props;
    const showText = navigation.getParam('mode') === 'edit' ? '正在编辑' : '编辑完成';
    return (
      <View style={styles.container}>
        <Text>这是Page2页面</Text>
        <Button
          title="回到首页"
          onPress={() => navigation.goBack()}
        />
        <Text style={{color: 'blue', fontSize: 40}}>{showText}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            navigation.setParams({title: text});
          }}
          placeholder='please enter your info'
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
  },
  input: {
    width: 150,
    height: 40,
    backgroundColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    borderColor: '#fff'
  }
})