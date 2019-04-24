/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {StorybookUIRoot} from './.storybook/storybook';
import {name as appName} from './app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
