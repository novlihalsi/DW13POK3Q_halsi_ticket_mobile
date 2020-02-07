import React, {Component} from 'react';

import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  View,
  Button,
  Text,
  Toast,
} from 'native-base';
import {StatusBar, ToastAndroid, Keyboard} from 'react-native';
import {storeAuthKey, getAuthKey, removeAuthKey, GetAuth} from '../config/auth';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handlePress = () => {
    axios
      .post('https://halsiticket-api.herokuapp.com/api/v1/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(res => {
        const data = res.data;
        storeAuthKey({
          id: data.user.id,
          username: data.user.username,
          email: data.user.email,
          fullname: data.user.fullname,
          token: data.token,
          image: data.user.image,
        });
        this.props.navigation.navigate('App');
      })
      .catch(error => {
        Keyboard.dismiss();
        ToastAndroid.show('username dan password salah', ToastAndroid.SHORT);
      });
  };

  handleUnameChange = email => {
    this.setState({email});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  render() {
    return (
      <Container style={styles.Content}>
        <StatusBar backgroundColor="#062639" barStyle="light-content" />
        <Text style={styles.title}>Welcome to Halsi Ticket</Text>
        <Form style={styles.Form}>
          <Item floatingLabel last>
            <Label style={styles.text}>Username</Label>
            <Input
              value={this.state.email}
              onChangeText={this.handleUnameChange}
              style={styles.text}
            />
          </Item>
          <Item floatingLabel last>
            <Label style={styles.text}>Password</Label>
            <Input
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              style={styles.text}
              secureTextEntry={true}
            />
          </Item>
        </Form>

        {this.state.email === '' || this.state.password === '' ? (
          <Button
            onPress={this.handlePress}
            transparent
            disabled
            style={{backgroundColor: 'grey', justifyContent: 'center'}}>
            <Text style={styles.text}>Login</Text>
          </Button>
        ) : (
          <Button
            onPress={this.handlePress}
            transparent
            style={styles.buttonlogin}>
            <Text style={styles.text}>Login</Text>
          </Button>
        )}

        {/* <Button
          onPress={this.handleGetData}
          transparent
          style={styles.buttonlogin}>
          <Text style={styles.text}>Logout</Text>
        </Button> */}
      </Container>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  Content: {
    justifyContent: 'center',
    backgroundColor: '#062639',
    padding: 30,
  },

  Form: {
    marginBottom: 30,
  },
  buttonlogin: {
    backgroundColor: '#e7301c',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
  },

  title: {
    color: 'white',
  },
});
