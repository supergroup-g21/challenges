import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import Tabs from 'react-native-tabs';

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

class NavBar extends Component {
  login() {
    alert('trying to login')
    this.props.navigator.push({
      id: 'login'
    })
  }

  render() {
    var navigator = this.navigator;
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
              Home
          </Text>
          <Text style={styles.instructions}>
              Login
          </Text>
      </View>
    );
  }
}

export default NavBar;
