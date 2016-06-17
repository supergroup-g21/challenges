import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class ChallengesAttending extends Component {
  constructor() {
    super()
    this.state = {
      challengesAttending: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:3000/api/challenges', { method: 'GET' })
      .then(response => { return response.text() })
      .then(response => {
        this.setState({
          challengesAttending: JSON.parse(response)
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {

    var allChallenges = this.state.challengesAttending.map(challenge => {
        return <View style={styles.challengeListing} key={challenge.id}>
          <Text style={styles.challengeTitle}>{challenge.title}</Text>
          <Text style={styles.challengeDesc}>{challenge.description}</Text>
          <Text style={styles.challengeTime}>{challenge.start_time}</Text>
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
      <View style={styles.container}>
        <Text style={styles.dashText}>
          Congrats! You are going to the following challenges you lucky devil.
        </Text>
        <ChallengesAttending>
        </ChallengesAttending>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcf7e8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashText: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'justify',
    color: '#031617'
  },
  challengeListing: {
    backgroundColor: '#16CCCF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F2792A',
    padding: 10,
    marginBottom: 3,
    marginRight: 5,
    marginLeft: 5,
    textAlign: 'justify'
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  challengeDesc: {
    textAlign: 'justify',
    color: '#031617',
    fontSize: 12
  },
  challengeTime: {
    textAlign: 'justify',
    color: '#031617',
    fontSize: 10
  }
})

export default ChallengesWidget;
