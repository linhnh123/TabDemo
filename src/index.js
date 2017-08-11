/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Stack from './stack';
import Tab from './tab';

const AppStack = StackNavigator({
  StackPage: { screen: Stack },
  Tab: { screen: Tab },
});

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
