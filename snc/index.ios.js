/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './pages/Home';
import First from './pages/First';
import Second from './pages/Second';


class snc extends Component {
  constructor() {
    super();
    this.state = {
      fbAuth: false
    }
    this.updateAuth = this.updateAuth.bind(this);
  }

  updateAuth() {
    this.setState({ fbAuth: true });
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    console.log(route);
    switch (route.id) {
      case 'home':
        console.log('first!');
        return <First navigator={navigator} title='home' />

      case 'challenges':
        return <Second navigator={navigator} title='challenges' />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'home' }}
        renderScene={this.navigatorRenderScene}/>
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
