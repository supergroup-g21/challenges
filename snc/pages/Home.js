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
    backgroundColor: '#fcf7e8'
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
        <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 10, textDecorationLine: 'underline', textDecorationStyle: 'double', textDecorationColor: '#16CCCF', paddingBottom: 15}}>
          Seattle Neighborhood Challenge
        </Text>
        <Text onPress={Actions.login}>Login</Text>
        <Text onPress={Actions.dashboard}>Dashboard</Text>
        <Text onPress={Actions.newChallenge} style={{marginBottom: 30}}>Add challenge</Text>
        <SimpleMap />
      </View>
    );
  }
};

export default Home;
