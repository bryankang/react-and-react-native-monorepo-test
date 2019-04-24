import R from 'ramda';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { select } from '@storybook/addon-knobs';
import { StatusBar } from '../src/components/status-bar/status-bar';
import { ThemeProvider } from '../src/utils/use-theme';

const light = {name: 'light'}
const dark = {name: 'dark'}

const themes = [
  light,
  dark,
];

const selectOptions = themes.reduce((acc: any, value) => {
  acc[value.name] = `${value.name}`;
  return acc;
}, {});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
