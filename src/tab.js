import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './home';
import Market from './market';
import Profile from './profile';

const Tab = TabNavigator({
  Home: { screen: Home },
  Market: { screen: Market },
  Profile: { screen: Profile },
});

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tab screenProps={{ whereToGo: this.props.navigation.state.params.whereToGo }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
