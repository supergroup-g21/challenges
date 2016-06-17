import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  PropTypes,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';


var { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 47.6253;
const LONGITUDE = -122.3222;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

var styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    height: 350,
    width: 400
  },
});

class SimpleMap extends Component{
  state = {
    markers: [
      {
        latitude: 47.609194,
        longitude: -122.325846,
        title: 'Magic the Gathering: The Gathering',
        description: 'Looking for 3 noble foes to engage in righteous battle until my mom brings home Arby’s for dinner around 5pm',
        start_time: '2016-6-20 17:00:00',
        end_time: '2016-6-20 20:00:00',
      },
      {
        latitude: 47.611917,
        longitude: -122.325545,
        title: 'Pickup basketball for all',
        description: 'non-professional basketball enthusiast seeking other amateur hoop lovers for a game of fundamentals heavy ball!',
        start_time: '2016-6-25 15:00:00',
        end_time: '2016-6-25 18:00:00',
      },
      {
        latitude: 47.593304,
        longitude: -122.332165,
        title: 'Banjo-vie Ban-Jammie',
        description: "Grab your banjo and let's wail on the greatest hits of New Jersey's finest",
        start_time: '2016-6-26 12:00:00',
        end_time: '2016-6-27 18:00:00',
      }
    ]
  }

  componentWillMount() {
    console.log('mount');
    fetch('http://localhost:3000/map', { method: 'GET'})
      .then(res => {
        console.log(res);
        return res.text()
      })
      .then(data => {
        console.log(data);
        this.setState({
          markers: JSON.parse(data)
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    var markers = this.state.markers.map(marker => {
      console.log(marker);
      return <MapView.Marker
      coordinate={ {
        latitude: marker.lat,
        longitude: marker.long}
      }/>;
    })
    return (
      <View style={styles.container}>
        <MapView
          ref="map"
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
        { markers }
        </MapView>
      </View>
    );
  }
};


export default SimpleMap;
