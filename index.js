/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Exercise from './exercise';
import AboutStyle from './AboutStyle'
import Login from './Login'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
