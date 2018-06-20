import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

// Pages
import Explore from './pages/Explore';
import Saved from './pages/Saved';
import Trips from './pages/Trips';
import Inbox from './pages/Inbox';
import Profile from './pages/Profile';

const Routes = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search-outline" color={tintColor} size={24} />
        ),
      },
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: 'SAVED',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-heart-outline" color={tintColor} size={24} />
        ),
      },
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: 'TRIPS',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-heart" color={tintColor} size={24} />,
      },
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-chatboxes-outline" color={tintColor} size={24} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person-outline" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  },
);

export default Routes;
