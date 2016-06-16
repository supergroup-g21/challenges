import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  challengeWidgetContainer: {
    marginTop: 120
  },
  challengeListing: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 5
  }
})

class ChallengesAttending extends Component {
  constructor() {
    super()
    this.state = {
      challengesAttending: [
        {
          title: 'Challenge 1',
          time: 'Monday at 4 fucking o clock'
        },
        {
          title: 'Challenge 2',
          time: 'Tuesday at 4 fucking o clock'
        },
        {
          title: 'Challenge 3',
          time: 'Wednesday at 4 fucking o clock'
        }
      ]
    }
    this.getChallenges = this.getChallenges.bind(this);
  }

  getChallenges() {
    // make call to api
  }

  render() {

    var allChallenges = this.state.challengesAttending.map(challenge => {
        return <View style={styles.challengeListing}>
          <Text>{challenge.title}</Text>
          <Text>{challenge.time}</Text>
        </View>
    })

    return (
      <View>
          {allChallenges}
      </View>

    )
  }
}

class ChallengesWidget extends Component {

  render() {
    return (
      <View style={styles.challengeWidgetContainer}>
        <ChallengesAttending></ChallengesAttending>
      </View>
    )
  }
}

export default ChallengesWidget;
