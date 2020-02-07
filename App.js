import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AppStack from './src/screens/private/index';
import Login from './src/screens/Login';
import {GetAuth} from './src/config/auth';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    GetAuth().then(res => {
      this.setState({
        user: res,
      });
    });
  }

  render() {
    const {user} = this.state;
    return !user ? <RootNavigationNotLogin /> : <RootNavigationLogin />;
  }
}
const RootNavigationNotLogin = createAppContainer(
  createSwitchNavigator(
    {
      Auth: Login,
      App: AppStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);

const RootNavigationLogin = createAppContainer(
  createSwitchNavigator(
    {
      Auth: Login,
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
export default App;
