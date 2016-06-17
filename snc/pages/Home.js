import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import SimpleMap from '../components/simplemap';

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
        <View style={styles.menuContain}>
          <Text onPress={Actions.login} style={styles.menuBtn}>
            Login
          </Text>
          <Text style={styles.title}>
            Seattle Neighborhood Challenge
          </Text>
          <Text onPress={Actions.dashboard} style={styles.menuBtn}>
            Dashboard
          </Text>
        </View>
        <Text style={styles.textMain}>
          Want to challenge people to the latest Xbox game or a quilting bee? Consider it on like donkey kong.
        </Text>
        <Text onPress={Actions.newChallenge} style={styles.challengeBtn}>
          Add challenge
        </Text>
        <SimpleMap />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcf7e8'
  },
  title: {
    fontWeight: 'bold',
    color: '#fcf7e8',
    textAlign: 'center',
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 14
  },
  menuContain: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#98B735',
    marginBottom: 15,
    marginTop: 0
  },
  menuBtn: {
    backgroundColor: '#98B735',
    color: '#fcf7e8',
    textAlign: 'center',
    fontSize: 11
  },
  textMain: {
    margin: 10,
    fontSize: 14,
    textAlign: 'justify',
    color: '#031617'
  },
  challengeBtn: {
    marginBottom: 20,
    borderStyle: 'solid',
    borderColor: '#F2792A',
    borderWidth: 1,
    padding: 10,
    fontSize: 12,
    color: '#fcf7e8',
    textAlign: 'center',
    backgroundColor: '#16CCCF'
  }
});

export default Home;
