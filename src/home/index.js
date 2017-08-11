/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
  componentWillMount() {
    const { whereToGo } = this.props.screenProps;
    this.props.navigation.navigate(whereToGo);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
});
