import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ChallengeForm from '../components/ChallengeForm'

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

class Second extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hello from Second screen
        </Text>
        <ChallengeForm></ChallengeForm>
      </View>
    );
  }
};

export default Second;
