import { Platform } from 'react-native';

export const SafeAreaView = Platform.OS === "android"
  ? require('./safe-area-view.android').SafeAreaView
  : require('./safe-area-view.ios').SafeAreaView;
