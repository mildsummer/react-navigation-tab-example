import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Tab from '../components/Tab';

export default class Home extends Component {
  static router = Tab.router;

  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'powderblue',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>Component 1</Text>
        </View>
        <Tab
          navigation={navigation}
          style={{
            flex: 1
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'steelblue',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>Component 2</Text>
        </View>
      </View>
    );
  }
}
