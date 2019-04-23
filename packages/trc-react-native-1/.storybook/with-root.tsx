import R from 'ramda';
import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { ThemeProvider } from '../src/hooks/useTheme';

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

export function withRoot(storyFn: any): React.ReactElement {
  const themeName = select('theme', selectOptions, 'light');
  const theme = R.find(R.propEq('name', themeName), themes);

  return (
      <ThemeProvider theme={theme}>
          {storyFn()}
      </ThemeProvider>
  )
}
