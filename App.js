import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/screens/Home';
import EventDetail from './src/screens/EventDetail';
import Category from './src/screens/Category';
import CategoryPage from './src/screens/CategoryPage';
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Halsi Ticket',

        headerStyle: {
          backgroundColor: '#EF233C',
        },

        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Category: {
      screen: Category,
      navigationOptions: {
        title: 'Category',
      },
      headerStyle: {
        backgroundColor: '#ffffff',
      },

      headerTintColor: '#EF233C',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    EventDetail: {
      screen: EventDetail,
      navigationOptions: {
        title: 'EventDetail',
      },
      headerStyle: {
        backgroundColor: '#ffffff',
      },

      headerTintColor: '#EF233C',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
