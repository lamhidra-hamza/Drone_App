import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class drone_app extends Component {
  state = {
    placeName: '',
    places: []
  }

render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
        <View style={{width: '150%', height: 45, backgroundColor: '#62d1aa'}} />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 45, height: 45, marginLeft:'1%'}}
          source={require('./img/Icon1.png')}
        />
        <Image
           style={{width: 30, height: 30, marginLeft:'3%', marginTop:'1%'}}
           source={require('./img/icons8-gear-50.png')}
           />
        <Image
          style={{width: 30, height: 30, marginLeft:'3%', marginTop:'1%'}}
          source={require('./img/icons8-quadcopter-48.png')}
        />
        <Image
          style={{width: 30, height: 30, marginLeft:'3%', marginTop:'1%'}}
          source={require('./img/icons8-car-battery-50.png')}
        />
        </View>
      <MapView
      style={{height: '100%'}}
      provider={PROVIDER_GOOGLE}
      MapType = {"satellite"}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      </MapView>
    </View>
    );
  }
}

var styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
  }
});