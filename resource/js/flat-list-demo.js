import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

const data = ['广州市', '深圳市', '珠海市', '汕头市', '佛山市', '韶关市', '湛江市', '肇庆市', '江门市', '茂名市', '惠州市', '梅州市'];

export default class Home extends Component {
  state = {
    isLoading: false,
    data: data
  }
  
  _renderItem (data) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{data.item}</Text>
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
        const data = ['汕尾市', '河源市', '阳江市', '清远市', '东莞市', '中山市', '潮州市', '揭阳市', '云浮市'];
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
        <FlatList
          data={data}
          renderItem={data => this._renderItem(data)}
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
    height: 200,
    marginRight: 15,
    marginLeft: 15,
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
  }
})