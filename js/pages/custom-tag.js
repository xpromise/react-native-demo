import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, Alert} from 'react-native';
import CheckBox from 'react-native-check-box';
import Toast from 'react-native-root-toast';

import TagOperation from './tag-operation';
import {default_key} from './keys';
import {headerBackgroundColor} from './theme-colors';

let _this = null;

export default class CustomTag extends Component {
  static navigationOptions = {
    title: '自定义标签',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    },
    headerStyle: {
      backgroundColor: headerBackgroundColor
    },
    headerTintColor: '#fff',
    headerLeft: <TouchableHighlight
      onPress={() => _this.goBack()}
      underlayColor={headerBackgroundColor}
      style={{marginLeft: 6}}
    >
      <Image
        style={{width: 26, height: 26}}
        source={require('../../resource/images/ic_arrow_back_white_36pt.png')}
      />
    </TouchableHighlight>,
    headerRight: <Text style={{
      fontSize: 20,
      marginRight: 10,
      color: '#fff'
    }} onPress={() => _this.saveTags()}>保存</Text>
  }
  
  constructor (props) {
    super(props);
    this.tagOperation = new TagOperation(default_key);
    this.state = {
      tags: []
    }
  }
  
  componentDidMount () {
    _this = this;
    this.loadData();
  }
  
  loadData = async ()  => {
    const result = await this.tagOperation.fetch();
    this.setState({
      tags: result
    })
  }
  
  //更新checkbox的checked方法
  updateChecked = i => {
    const {tags} = this.state;
  
    const result = tags.map((item, index) => {
      if (index === i) {
        //说明找到了  修改了原数组
        // item.checked = true;
        //没有修改原数组， 替换了之前的值
        return {...item, checked: !item.checked};
      }
      return item;
    })
    
    this.setState({
      tags: result
    })
    
  }
  
  saveTags = async () => {
    const {tags} = this.state;
    const result = tags.filter(item => item.checked);
    await this.tagOperation.save(result);
    Toast.show("保存成功~", {
      duration: Toast.durations.SHORT,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      onHidden: () => {
        this.props.navigation.pop();
      }
    });
  }
  
  goBack = () => {
    Alert.alert(
      '提示',
      '要保存本页的修改吗？',
      [
        {text: '不保存', onPress: () => this.props.navigation.pop(), style: 'cancel'},
        {text: '保存', onPress: () => this.saveTags()},
      ],
      { cancelable: false }
    )
  }
  
  render () {
    const {tags} = this.state;
    let tags_length = tags.length;
    let pre_length = tags_length - 2;
    let content = [];
    //必须大于等于0才能走，说明数组长度大于2，显示双数的
    if (pre_length >= 0) {
      for (let i = 0; i <= pre_length; i += 2) {
        content.push(<View key={i}>
          <View style={styles.item}>
            <CheckBox
              style={styles.checkBox}
              onClick={this.updateChecked.bind(null, i)}
              isChecked={tags[i].checked}
              leftText={tags[i].name}
              checkBoxColor={headerBackgroundColor}
          />
            <CheckBox
              style={styles.checkBox}
              onClick={this.updateChecked.bind(null, i+1)}
              isChecked={tags[i+1].checked}
              leftText={tags[i+1].name}
              checkBoxColor={headerBackgroundColor}
            />
          </View>
          <View style={styles.line}></View>
        </View>)
      }
    }
    //如果有余数，说明数组是单数，有一个要单独显示
    if (tags_length % 2 !== 0) {
      content.push(<View key={tags_length - 1}>
        <View style={{height: 40}}>
          <CheckBox
            style={styles.checkBox}
            onClick={this.updateChecked.bind(null, tags_length - 1)}
            isChecked={tags[tags_length - 1].checked}
            leftText={tags[tags_length - 1].name}
            checkBoxColor={headerBackgroundColor}
          />
        </View>
        <View style={styles.line}></View>
      </View>)
    }
  
    return (
      <View style={styles.container}>
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 22
  },
  line: {
    height: 1,
    backgroundColor: '#000'
  },
  item: {
    flexDirection: 'row',
  },
  checkBox: {
    flex: 1,
    padding: 10
  }
});