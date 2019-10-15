import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Third from '../screens/First';
import Forth from '../screens/Second';

const TabNavigator = createMaterialTopTabNavigator(
  {
    Third: {
      screen: Third,
      navigationOptions: {
        title: 'Third',
        tabBarIcon: ({ tintColor }) => <Icon size={24} name="home" color={tintColor} />
      }
    },
    Forth: {
      screen: Forth,
      navigationOptions: {
        title: 'Forth',
        tabBarIcon: ({ tintColor }) => <Icon size={24} name="cog" color={tintColor} />
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarOptions: {
          style: {
            backgroundColor: "#eee"
          },
          labelStyle: {
            color: '#000'
          },
          indicatorStyle: {
            backgroundColor: "#f00"
          },
          showIcon:true,
          activeTintColor:"#333",
          inactiveTintColor:"#aaa"
        }
      }
    }
  }
);

export default class SubTab extends Component {
  static router = TabNavigator.router;

  render() {
    const { navigation } = this.props;
    return (
      <TabNavigator navigation={navigation} />
    );
  }
}
