import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ChallengeForm from '../components/ChallengeForm'

class Second extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.newChalText}>
          Give us all the deets for your new challenge in the form below.
        </Text>
        <ChallengeForm></ChallengeForm>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcf7e8',
    marginTop: 100
  },
  newChalText: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'justify',
    color: '#031617'
  }
});

export default Second;
