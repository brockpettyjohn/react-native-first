import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      
        <View style={{ flexDirection: 'row', height: 100, padding: 20 }}>
          <View style={{ backgroundColor: 'blue', flex: 0.8 }} />
          <View style={{ backgroundColor: 'red', flex: 0.5 }} />
          <Text>YO!</Text>
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
