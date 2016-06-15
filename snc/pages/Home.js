import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

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

class Home extends Component{
  navSecond() {
    this.props.navigator.push({
      id: 'login'
    })
  }

  render() {
    console.log('rendering?');
    return (
      <View style={styles.container}>
        <Text>
          Hello from First screen
        </Text>
        <TouchableHighlight onPress={this.navSecond.bind(this)}>
          <Text>
            Login
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
};

export default Home;
