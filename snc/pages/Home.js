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
  menuBtn: {
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: '#F2792A',
    borderRadius: 5,
    backgroundColor: '#98B735',
    color: '#fcf7e8',
    padding: 5
  }
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
        <Text onPress={Actions.login} style={styles.menuBtn}>Login</Text>
        <Text onPress={Actions.dashboard} style={styles.menuBtn}>Dashboard</Text>
        <Text onPress={Actions.newChallenge} style={styles.menuBtn}>Add challenge</Text>
        <SimpleMap />
      </View>
    );
  }
};

export default Home;
