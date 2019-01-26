import React, {Component} from 'react';
import SortableListView from 'react-native-sortable-listview';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button
} from 'react-native';
import { generateSecureRandom } from 'react-native-securerandom';
import format from 'nanoid/async/format';
import url from 'nanoid/url';

import TagOperation from './my/tag-operation';
import {default_key} from '../common/keys';

let list1 = {
  hello: {text: 'world'},
  how: {text: 'are you'},
  test: {text: 123},
  this: {text: 'is'},
  a: {text: 'a'},
  real: {text: 'real'},
  drag: {text: 'drag and drop'},
  bb: {text: 'bb'},
  cc: {text: 'cc'},
  dd: {text: 'dd'},
  ee: {text: 'ee'},
  ff: {text: 'ff'},
  gg: {text: 'gg'},
  hh: {text: 'hh'},
  ii: {text: 'ii'},
  jj: {text: 'jj'},
  kk: {text: 'kk'}
}
let shortlist = {
  hello: {text: 'world'},
  how: {text: 'are you'},
  test: {text: 123},
  this: {text: 'is'},
}
let list3 = {
  hello:  'world',
  how:  'are you',
  test:  123,
  these:  'is',
  a:  'a',
  real:  'real',
  drag:  'drag and drop',
  bb:  'bb',
  cc:  'cc',
  dd:  'dd',
  ee:  'ee',
  ff:  'ff',
  gg:  'gg',
  hh:  'hh',
  ii:  'ii',
  jj:  'jj',
  kk:  'kk'
}

let list4 = {
  v0: 0,
  v1: 1,
  v2: 2,
  v3: 3,
  v4: 4,
  v5: 5,
  v6: 6,
  v7: 7,
  v8: 8,
  v9: 9,
  v10: 10,
  v11: 11,
  v12: 12,
  v13: 13,
  v14: 14,
  v15: 15,
  v16: 16,
}

let data = list3;

let order = Object.keys(data); //Array of keys

class RowComponent extends Component {
  render () {
    return <TouchableHighlight underlayColor={'#eee'} style={{padding: 25, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}} {...this.props.sortHandlers}>
      <Text style={{fontSize: 20}}>{data === list3 || data === list4? this.props.data: this.props.data.text}</Text>
    </TouchableHighlight>
  }
}

export default class MyComponent extends Component{
  constructor (props) {
    super(props);
    this.tagOperation = new TagOperation(default_key)
  }
  
  async createUser () {
    return await format(generateSecureRandom, url, 6);
  }
  
  render () {
    return (
      <View style={styles.container}>
        <View style={{height: 64, backgroundColor: 'lightblue'} /* fake nav bar */} >
          <Text style={styles.welcome} > Sortable </Text>
        </View>
        <Button
          title='清空所有缓存数据'
          onPress={this.tagOperation.remove}
        />
        <Button
          title='生成唯一key'
          onPress={
            async () => {
              try {
                /*
                 iRpA6E
                 ft64TQ
                 ojq7jq
                 CVBIv4
                 pgIGaZ
                 eG1wP9
                 xDuMJK
                 HUEh8k
               */
                const result1 = await this.createUser();
                const result2 = await this.createUser();
                const result3 = await this.createUser();
                const result4 = await this.createUser();
                const result5 = await this.createUser();
                const result6 = await this.createUser();
                const result7 = await this.createUser();
                const result8 = await this.createUser();
                console.log(result1);
                console.log(result2);
                console.log(result3);
                console.log(result4);
                console.log(result5);
                console.log(result6);
                console.log(result7);
                console.log(result8);
              } catch (e) {
                console.log(e);
              }
            }
          }
        />
        <SortableListView
          style={{flex: 1, marginBottom: 0}}
          data={data}
          order={order}
          onRowMoved={e => {
            console.log(e);
            order.splice(e.to, 0, order.splice(e.from, 1)[0]);
            this.forceUpdate();
          }}
          renderRow={row => <RowComponent data={row} />}
        />
      </View> );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});