import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import Toast from 'react-native-root-toast';
import SortableListView from 'react-native-sortable-listview';

import TagOperation from './tag-operation';
import ScrollItem from './scroll-item';
import {default_key} from '../../common/keys';
import {headerBackgroundColor} from '../../common/theme-colors';

let _this = null;

export default class SortTag extends Component {
  static navigationOptions = {
    title: '标签排序',
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
        source={require('../../../resource/images/ic_arrow_back_white_36pt.png')}
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
    //修改后标签数组列表
    this.order = [];
    //修改后标签显示对象列表
    this.tags = {};
    //原来标签数组列表
    this.state = {
      originalTags: null
    }
  }
  
  componentDidMount () {
    _this = this;
    this.loadData();
  }
  
  loadData = async ()  => {
    const originalTags = await this.tagOperation.fetch();
    
    originalTags.forEach(item => {
      this.tags[item.name] = item.name
    })
    
    this.order = Object.keys(this.tags);
    
    //通过这个重新触发渲染页面
    this.setState({
      originalTags
    })
  }
  
  updateTagsSort = () => {
    const {originalTags} = this.state;
    
    const result = this.order.reduce((prev, curr) => {
      return [...prev, originalTags.find(tag => tag.name === curr)]
    }, [])
    
    console.log(originalTags);
    console.log(result);
    
    return result;
    
  }
  
  saveTags = async () => {
    try {
      console.log(11111111);
      //更新排序
      const result = this.updateTagsSort();
      //保存
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
    } catch (e) {
      console.log(e);
    }
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
    
    return (
      <View style={styles.container}>
        <SortableListView
          style={{flex: 1}}
          data={this.tags}
          order={this.order}
          onRowMoved={e => {
            this.order.splice(e.to, 0, this.order.splice(e.from, 1)[0]);
            console.log('**********');
            console.log(this.order);
            console.log('**********');
            this.forceUpdate();
          }}
          renderRow={row => <ScrollItem data={row} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});