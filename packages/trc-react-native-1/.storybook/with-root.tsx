import R from 'ramda';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { select } from '@storybook/addon-knobs';
import { StatusBar } from '../src/components/status-bar/status-bar';
import { Theme, lightTheme, darkTheme } from '@trainerroad/trc-core';
import { ThemeProvider } from '../src/utils/utils';

const light = lightTheme;
const dark = darkTheme;

const themes = [
  lightTheme,
  darkTheme,
];

const selectOptions = themes.reduce((acc: any, value) => {
  acc[value.name] = `${value.name}`;
  return acc;
}, {});

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export function withRoot(storyFn: any): React.ReactElement {
  const themeName = select('theme', selectOptions, 'light');
  const theme = R.find(R.propEq('name', themeName), themes);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar/>
      <View style={styles.root}>
        {storyFn()}
      </View>
    </ThemeProvider>
  )
}
