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
    a: {
      latitude: LATITUDE + SPACE,
      longitude: LONGITUDE + SPACE,
    },
    b: {
      latitude: LATITUDE - SPACE,
      longitude: LONGITUDE - SPACE,
    },
    markers: []
  }

  render() {
    console.log('hi');
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
        </MapView>
        <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
        {this.state.markers.map(marker => (
          <MapView.Marker
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
          />
        ))}
        </MapView>
      </View>
    );
  }
};


export default SimpleMap;
