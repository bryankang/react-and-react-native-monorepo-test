import React, { FC, useEffect } from 'react';
import { Modal, Text, TouchableWithoutFeedback, View, StatusBar, SafeAreaView, NativeModules } from 'react-native'
import { storiesOf } from '@storybook/react-native';
import { text, select } from '@storybook/addon-knobs';
import { action } from '../../../.storybook/actions';
import { Card } from './card';
const { StatusBarManager } = NativeModules;

storiesOf('CenteredView1', module)
  .add('default view', () => {

    const Comp: FC = () => {
      const a = text('a', 'asf')
      useEffect(() => {
        console.log('height', StatusBarManager.HEIGHT)
      }, [])
      return (
        <View style={{ flex: 1, backgroundColor: 'black'}}>
      <Card>
        <View style={{ width: 100, height: 24, backgroundColor: 'purple'}}/>
        <TouchableWithoutFeedback onPress={action('onPress')}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'lightgray' }}>
          <View style={{ width: 300, height: 300, backgroundColor: 'yellow'}}/>
          </SafeAreaView>
        </TouchableWithoutFeedback>
          <SafeAreaView style={{ flex: 1}}>
          <View style={{ backgroundColor: 'red'}}>
          <Text>{a}</Text>
          </View>
          </SafeAreaView>
        {/* <Modal
          visible={true}
        >
          <View style={{ flex: 1, backgroundColor: 'black'}}></View>
        </Modal> */}
        <View style={{ width: 100, height: 40, backgroundColor: 'teal'}}/>
        </Card>
        </View>

      )
      }
      return <Comp/>
  });
