import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

import PopularTab from './popular-tab';
import {headerBackgroundColor} from '../common/theme-colors';
import TagOperation from './my/tag-operation';
import {default_key} from '../common/keys';

export default class Page1 extends Component {
  constructor (props) {
    super(props);
    this.tagOperation = new TagOperation(default_key);
    this.state = {
      tags: []
    }
  }
  //初始化更新
  componentDidMount () {
    this.loadData();
  }
  //更新时更新
  componentWillUpdate () {
    this.loadData();
  }
  
  loadData = async () => {
    const result = await this.tagOperation.fetch();
    this.setState({
      tags: result
    })
  }
  
  
  render () {
    const {tags} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={headerBackgroundColor}
        />
        {
          tags.length
            ? <ScrollableTabView
              tabBarBackgroundColor={headerBackgroundColor}
              tabBarActiveTextColor="#fff"
              tabBarInactiveTextColor="mintcream"
              tabBarUnderlineStyle={{backgroundColor: '#e7e7e7', height: 2}}
              renderTabBar={() => <ScrollableTabBar style={{height: 40, elevation: 2, borderWidth: 0}}/>}
            >
              {
                tags.map((item, index) => {
                  return <PopularTab tabLabel={item.name} key={index} name={item.name}>{item.name}</PopularTab>
                })
              }
            </ScrollableTabView>
            : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16
  },
});