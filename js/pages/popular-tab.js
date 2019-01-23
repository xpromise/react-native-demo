import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import MyFetch from "../common/fetch";
import RepositoryItem from './repository-item';

export default class PopularTab extends Component {
  constructor (props) {
    super(props);
    this.fetch = new MyFetch();
    this.state = {
      content: []
    }
  }
  
  componentDidMount () {
    this.loadData();
  }
  
  loadData = () => {
    const url = `https://api.github.com/search/repositories?q=java&sort=stars&count=10`;
    
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
      })
      .catch(err => {
        this.setState({
          content: JSON.stringify(err)
        })
      })
    
  }
  
  _renderItem (item, index) {
    return <RepositoryItem item={item} key={index} />
  }
  
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.content}
          renderItem={({item, index}) => this._renderItem(item, index)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});