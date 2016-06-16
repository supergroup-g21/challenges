/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import Home from './pages/Home'
import ChallengeForm from './components/ChallengeForm'



class snc extends Component {
  constructor() {
    super();
    this.state = {
      fbAuth: false,
    }
    this.updateAuth = this.updateAuth.bind(this);
  }

  updateAuth() {
    this.setState({ fbAuth: true });
  }

  render() {
    return (
      <View style={styles.container}>

        <Home></Home>
        <ChallengeForm></ChallengeForm>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('snc', () => snc);
