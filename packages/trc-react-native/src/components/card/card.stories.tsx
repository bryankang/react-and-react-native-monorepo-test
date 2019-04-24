import React, { FC, useEffect } from 'react';
import { Modal, Text, TouchableWithoutFeedback, View, StatusBar, NativeModules } from 'react-native'
import { storiesOf } from '@storybook/react-native';
import { text, select } from '@storybook/addon-knobs';
import { action } from '../../../.storybook/actions';
import { Card } from './card';
const { StatusBarManager } = NativeModules;
import { SafeAreaView } from '../safe-area-view/safe-area-view';

storiesOf('CenteredView1', module)
  .add('default view', () => (
    // <View>
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ width: 320, height: 240 }}>
        <Card>
          <Text>hi</Text>
          <View style={{ backgroundColor: 'lightpink'}}/>
        </Card>
      </View>
    </SafeAreaView>
    // </View>
  ));
