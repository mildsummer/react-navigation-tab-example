import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import First from '../screens/First';
import Second from '../screens/Second';

export default createMaterialTopTabNavigator(
  {
    First: {
      screen: First,
      navigationOptions: {
        title: 'First',
        tabBarIcon: ({ tintColor }) => <Icon size={24} name="home" color={tintColor} />
      }
    },
    Second: {
      screen: Second,
      navigationOptions: {
        title: 'Second',
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
          indicatorStyle: {
            backgroundColor: "#ccc"
          },
          showIcon:true,
          activeTintColor:"#333",
          inactiveTintColor:"#aaa"
        }
      }
    }
  }
);
