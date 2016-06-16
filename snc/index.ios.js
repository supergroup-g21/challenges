
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './pages/Home';
import Login from './pages/Login';
import Second from './pages/Second';

import SimpleMap from './components/simplemap'


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

    switch (route.id) {
      case 'home':
        console.log('first!');
        return <Home navigator={navigator} title='home' />

      case 'challenges':
        return <Second navigator={navigator} title='challenges' />

      case 'login':
        return <Login navigator={navigator} title='login' updateAuth={this.updateAuth} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{ id: 'home' }}
          renderScene={this.navigatorRenderScene}/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <SimpleMap />
        <Login></Login>
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
