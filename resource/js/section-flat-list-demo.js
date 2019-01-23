import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SectionList,
  Text,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

const data = [
  {data: ['广州市', '深圳市', '珠海市', '汕头市'], title: 'No.1'},
  {data: ['佛山市', '韶关市', '湛江市', '肇庆市'], title: 'No.2'},
  {data: ['江门市', '茂名市', '惠州市', '梅州市'], title: 'No.3'}
];

export default class SectionFlatListDemo extends Component {
  state = {
    isLoading: false,
    data: data
  }
  
  _renderItem (data, index) {
    return (
      <View style={styles.item} key={index}>
        <Text style={styles.text}>{data.item}</Text>
      </View>
    )
  }
  
  _renderSectionHeader ({section:{title}}) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.text}>{title}</Text>
      </View>
    )
  }
  
  loadData = (isRefreshing) => {
    if (isRefreshing) {
      this.setState({
        isLoading: true
      })
    }
    
    //模拟请求数据
    setTimeout(() => {
      let newData = [];
      if (isRefreshing) {
        //下拉刷新
        for (var i = this.state.data.length - 1; i >= 0; i--) {
          newData.push(this.state.data[i]);
        }
      } else {
        //上拉加载
        const data = [{data: ['汕尾市', '河源市', '阳江市', '清远市'], title: 'No.4'}, {data: ['东莞市', '中山市', '潮州市', '揭阳市', '云浮市'], title: 'No.5'}];
        newData = [...this.state.data, ...data];
      }
      //更新状态
      this.setState({
        isLoading: false,
        data: newData
      })
    }, 2000)
    
  }
  
  getIndicator = () => {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          size='large'
          color='pink'
          animating={true}
        />
        <Text>正在加载更多内容...</Text>
      </View>
    )
  }
  
  render () {
    const {data, isLoading} = this.state;
    
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.data}
          renderItem={(data, index) => this._renderItem(data, index)}
          // 自带的下拉刷新功能
          // refreshing={isLoading}
          // onRefresh={() => this.loadData(true)}
          //自定义下拉刷新功能
          refreshControl={
            <RefreshControl
              progressViewOffset={100}
              colors={['red']}
              refreshing={isLoading}
              onRefresh={() => this.loadData(true)}
            />
          }
          //下拉加载
          ListFooterComponent={() => this.getIndicator()}
          onEndReached={() => this.loadData()}
          renderSectionHeader={data => this._renderSectionHeader(data)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: 'pink',
    height: 80,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 22
  },
  indicatorContainer: {
    alignItems: 'center'
  },
  indicator: {
    margin: 10
  },
  sectionHeader: {
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
})