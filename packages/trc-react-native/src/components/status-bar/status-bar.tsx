import React from 'react';
import { StatusBar as ReactNativeStatusBar } from 'react-native';

// TODO: use theme
export function StatusBar() {
  return (
    <ReactNativeStatusBar
      backgroundColor="transparent"
      translucent={true}
    />
  )
};
