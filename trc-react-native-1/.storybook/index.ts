import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { withRoot } from './with-root';
// import { loadStories } from './storyLoader';

// import './addons';
import './rn-addons';


// const req = require.context('../src/', true, /\.stories\.tsx$/);

// import stories
configure(() => {
  // require('./stories');
  // req.keys().forEach(req);
  addDecorator(withRoot)
  addDecorator(withKnobs)
  // loadStories();
  require('../src/components/card/card.stories.tsx')
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI();

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
