import React from 'react';
import { Text } from 'react-native'
import { storiesOf } from '@storybook/react-native';
import { text,select } from '@storybook/addon-knobs';
import { Card } from './card';

storiesOf('components/CenteredView', module)
  .add('default view', () => {
    text('abb', 'asff')


    return (
    <Card></Card>
    )
  });

  storiesOf('components/CenteredView1', module)
  .add('default view', () => {
    // text('a', 'asf')
    return (
    <Card><Text>asdf</Text></Card>
    )
  });
