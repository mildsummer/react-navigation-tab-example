import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class First extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'pink',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>First Screen</Text>
      </View>
    );
  }
}
