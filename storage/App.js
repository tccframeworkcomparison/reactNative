/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, ActivityIndicator, Button, AsyncStorage, View, Text} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    text: null,
    newText: false
  };

  async saveText() {
    try {
      await AsyncStorage.setItem('@customStore:text', this.state.text);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  async getText() {
    try {
      const value = await AsyncStorage.getItem('@customStore:text');
      this.setState({newText: value});
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  saveAndGetText(){
    this.saveText()
    this.getText()
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          placeholder="Digite aqui"
          onChangeText={(text) => this.setState({text})}
        />
        <Button 
          title="Salvar"
          onPress={() => this.saveAndGetText() }
        />
        <Text> Texto salvo: {this.state.newText} </Text>
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
