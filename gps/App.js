/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ActivityIndicator, Text, View, Button} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    latitude: null,
    longitude: null,
    error: null,
    loading: false
  };

  getLocation() {
    this.setState({loading: true})
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          loading: false
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false },
    );
  }
  
  showLoad()
  {
    if(this.state.loading){
      return <ActivityIndicator></ActivityIndicator>
    }
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        { this.showLoad() }
        <Button onPress={() => this.getLocation() }
          title="Ativar GPS"
        />
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

