import {AsyncStorage} from 'react-native';
import keys from '../../resource/data/keys';
import {default_key} from './keys';

export default class TagOperation {
  constructor (key) {
    this.key = key;
  }
  
  fetch () {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(this.key, async (err, result) => {
        if (!err && result) {
          resolve(JSON.parse(result));
        } else {
          //第一次没有数据，所有如果使用默认值就读取默认keys
          const data = this.key === default_key ? keys : null;
          //此时是异步方法，需不要要等待?
          this.save(data);
          resolve(data);
        }
      })
    })
  }
  
  save (data) {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(this.key, JSON.stringify(data), err => {
        if (!err) resolve()
        else reject(err)
      })
    })
  }
  
}