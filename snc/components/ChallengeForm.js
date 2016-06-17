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
      value: null
    }
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    console.log('test');
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
    // value here is an instance of Challenge
      // Send POST request to server here, redirect to dashboard(?)
      fetch('http://localhost:3000/api/challenges', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value)
      }).then((response) => response.text())
      .then((responseText) => {
        alert(responseText);
      })
      .catch((error) => {
        alert("Errorror: " + error);
      });
    }
  }

  render() {
    return (
      <View>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}
        >
          <Form
              ref="form"
              type={Challenge}
              options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#16CCCF'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  scrollView: {
    height: 550,
  },
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#fcf7e8',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 16,
    color: '#fcf7e8',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#16CCCF',
    borderColor: '#F2792A',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});


export default ChallengeForm;
