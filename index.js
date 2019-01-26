/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//禁用黄色警告
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
