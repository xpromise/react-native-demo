import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';

export default class RepositoryItem extends Component {
  render () {
    const {item} = this.props;
    return (
      <View style={styles.tabItem}>
        <TouchableHighlight>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <View style={styles.items}>
              <View style={styles.items}>
                <Text style={styles.item}>Author: </Text>
                <Image style={styles.image} source={{uri: item.avatar_url}}/>
              </View>
              <View style={styles.items}>
                <Text style={styles.item}>Stars: </Text>
                <Text style={styles.item}>{item.stars}</Text>
              </View>
              <Image style={styles.favoriteImage} source={require('../../resource/images/ic_star.png')}/>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
    // shadowColor: 'gray',
    // shadowOpacity: 0.4,
    // shadowRadius: 1,
    // shadowOffset: {width: 0.5, height: 0.5},
    elevation: 2
  },
  image: {
    width: 22,
    height: 22
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  favoriteImage: {
    width: 25,
    height: 25
  }
});