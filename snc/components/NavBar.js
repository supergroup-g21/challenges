import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
}

class NavBar extends Component {
  _navigate() {
    this.props.navigate.push({id: 'login'})
  }

  render() {
    var navigator = this.navigator;
    return (
      <View navigator={navigator}>
        <TouchableHighlight onPress={this._navigate}>
          <Text>
            Login
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
