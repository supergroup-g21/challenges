import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import t from 'tcomb-form-native';

var Form = t.form.Form;

var Challenge = t.struct({
  title: t.String,
  description: t.String,
  maxChallengers: t.Integer,
  startDate: t.Date,
  locationAddress: t.String
});

var options = {};

class ChallengeForm extends Component {
  constructor() {
    super();
    this.state = {
      value: {}
    }
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Challenge
      //Send POST request to server here, redirect to dashboard(?)
      // fetch('yourservergoes.here/challenges/create', {
      //   method: 'POST',
      //   headers: {},
      //   body: value
      // })
    }
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Form
              ref="form"
              type={Challenge}
              options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});


export default ChallengeForm;
