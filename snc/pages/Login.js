import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from '../components/FBlogin'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Seattle N? Challenges</Text>
        <Login updateAuth={this.updateAuth}></Login>
      </View>
    )
  }
}

export default Home;
