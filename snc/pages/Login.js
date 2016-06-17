import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from '../components/FBlogin'

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Welcome to Seattle Neighborhood Challenge!
        </Text>
        <Text style={styles.mainText}>
          At this time you can only log in using your Facebook account. In the future, there will be an option to create an account with us.
        </Text>
        <Login updateAuth={this.updateAuth}></Login>
        <Text style={styles.disclaimer}>
          We will never sell, lend, or otherwise use any information you give us without your permission. Unless someone offers us a lot of money.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcf7e8'
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#031617'
  },
  mainText: {
    margin: 10,
    textAlign: 'justify',
    color: '#031617'
  },
  disclaimer: {
    marginTop: 50,
    margin: 10,
    textAlign: 'justify',
    fontSize: 10,
    color: '#031617'
  }
});

export default Home;
