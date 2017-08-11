import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Tab', { whereToGo: 'Home' })}>
          <Text>Go to Home Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 30}} onPress={() => this.props.navigation.navigate('Tab', { whereToGo: 'Market' })}>
          <Text>Go to Market Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 30}} onPress={() => this.props.navigation.navigate('Tab', { whereToGo: 'Profile' })}>
          <Text>Go to Profile Tab</Text>
        </TouchableOpacity>
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
