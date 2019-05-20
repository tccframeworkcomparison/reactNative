/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Button, View} from 'react-native';
import BleManager from 'react-native-ble-manager'


type Props = {};
export default class App extends Component<Props> {

  state = {
    status: 'desligado'
  }


  OnOffBt() {
    BleManager.enableBluetooth()
    .then(() => {
      this.setState({status:'ligado'})
    })
    .catch((error) => {
      this.setState({status:'desligado'})
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Bluetooth: { this.state.status }
        </Text>
        <Button
          title="Ligar Bluetooth"
          onPress={() => this.OnOffBt() }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
