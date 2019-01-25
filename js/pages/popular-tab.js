import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator, Text, Image} from 'react-native';
import MyFetch from "../common/fetch";
import RepositoryItem from './repository-item';

import {PullList} from '../../resource/react-native-pull';

export default class PopularTab extends Component {
  constructor (props) {
    super(props);
    this.fetch = new MyFetch();
    this.state = {
      /*content: [{
        name: 'xxx',
        description: 'yyy',
        avatar_url: 'https://reactnative.cn/img/header_logo.png',
        stars: 123456,
        home: 'https://www.baidu.com'
      }, {
        name: 'xxx',
        description: 'yyy',
        avatar_url: 'https://reactnative.cn/img/header_logo.png',
        stars: 123456,
        home: 'https://www.baidu.com'
      }]*/
      content: []
    }
  }
  
  componentDidMount () {
    this.loadData();
  }
  
  loadData = callback => {
    
    const url = `https://api.github.com/search/repositories?q=${this.props.name}&sort=stars&count=10`;
    
    this.fetch.getRepositories(url)
      .then(({items}) => {
        const content = items.map(item => {
          return {
            name: item.full_name,
            description: item.description,
            avatar_url: item.owner.avatar_url,
            stars: item.stargazers_count,
            home: item.html_url
          }
        })
        this.setState({
          content
        })
  
        callback && callback();
      })
      .catch(err => {
        this.setState({
          content: JSON.stringify(err)
        })
  
        callback && callback();
      })
    
  }
  
  _renderItem (item, index) {
    return <RepositoryItem item={item} key={index} />
  }
  
  //下拉更新
  onPullRelease = resolve => {
    //请求更新数据的函数
    this.loadData(resolve)
  }
  
  topIndicatorRender = (pulling, pullok, pullrelease) => {
    const hide = {position: 'absolute', left: -10000};
    const show = {position: 'relative', left: 0};
    setTimeout(() => {
      if (pulling) {
        this.txtPulling && this.txtPulling.setNativeProps({style: show});
        this.txtPullok && this.txtPullok.setNativeProps({style: hide});
        this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
      } else if (pullok) {
        this.txtPulling && this.txtPulling.setNativeProps({style: hide});
        this.txtPullok && this.txtPullok.setNativeProps({style: show});
        this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
      } else if (pullrelease) {
        this.txtPulling && this.txtPulling.setNativeProps({style: hide});
        this.txtPullok && this.txtPullok.setNativeProps({style: hide});
        this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
      }
    }, 1);
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
        <Text ref={(c) => {this.txtPulling = c;}}>下拉更新</Text>
        <Text ref={(c) => {this.txtPullok = c;}}>松开更新</Text>
        <Text ref={(c) => {this.txtPullrelease = c;}}>更新中</Text>
        <ActivityIndicator size="small" color="gray" />
      </View>
    );
  }
  
  render () {
    const {content} = this.state;
    return (
      <View style={styles.container}>
        {
          content.length
            ? <PullList
              data={content}
              renderItem={({item, index}) => this._renderItem(item, index)}
              onPullRelease={this.onPullRelease}
              topIndicatorRender={this.topIndicatorRender}
              topIndicatorHeight={60}
              prerenderingSiblingsNumber={4}
            />
            : <View style={styles.loading}><Text>加载中~~~</Text><ActivityIndicator size="large" color="gray" /></View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});