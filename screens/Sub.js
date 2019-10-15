import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Sub extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgray',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Sub Screen</Text>
      </View>
    );
  }
}
