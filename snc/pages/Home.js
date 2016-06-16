import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import SimpleMap from '../components/simplemap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
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

class Home extends Component{
  login() {
    this.props.navigator.push({
      id: 'login'
    })
  }

  challenges() {
    this.props.navigator.push({
      id: 'challenges'
    })
  }

  render() {
    console.log('rendering?');
    return (
      <View style={styles.container}>
        <Text>
          Hello from First screen
        </Text>
        <Text onPress={Actions.login}>GO TO LOGIN!!!</Text>
        <Text onPress={Actions.dashboard}>Dashboard</Text>
        <Text onPress={Actions.newChallenge}>Add challenges</Text>
        <SimpleMap />
      </View>
    );
  }
};

export default Home;
