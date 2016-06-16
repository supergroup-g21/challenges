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
      challengesAttending: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:3000/challenges', { method: 'GET' })
      .then(response => {
        this.setState({
          challengesAttending: JSON.parse(response.text())
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {

    var allChallenges = this.state.challengesAttending.map(challenge => {
        return <View style={styles.challengeListing} key={challenge.id}>
          <Text>{challenge.title}</Text>
          <Text>{challenge.description}</Text>
          <Text>{challenge.start_time}</Text>
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
