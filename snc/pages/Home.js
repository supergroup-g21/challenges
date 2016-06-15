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
      <View>
        <Text>Hello from Home....</Text>
        <Login updateAuth={this.updateAuth}></Login>
      </View>
    )
  }
}

export default Home;
