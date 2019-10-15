import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './screens/Home';
import Sub from './screens/Sub';

const HomeTab = createBottomTabNavigator(
  {
    Home: {
      screen: Home
    },
    Sub: {
      screen: Sub
    }
  }
);

const AppContainer = createAppContainer(HomeTab);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
