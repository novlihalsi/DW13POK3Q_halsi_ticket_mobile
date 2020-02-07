import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import EventDetail from './EventDetail';
import Category from './Category';
import CategoryPage from './CategoryPage';
import Profile from './Profile';
const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Halsi Ticket',

        headerStyle: {
          backgroundColor: '#062639',
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

        headerStyle: {
          backgroundColor: '#062639',
        },

        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    EventDetail: {
      screen: EventDetail,
      navigationOptions: {
        title: 'EventDetail',

        headerStyle: {
          backgroundColor: '#062639',
        },

        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    CategoryPage: {
      screen: CategoryPage,
      navigationOptions: {
        title: 'CategoryPage',

        headerStyle: {
          backgroundColor: '#062639',
        },

        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',

        headerStyle: {
          backgroundColor: '#062639',
        },

        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppStack);
