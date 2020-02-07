import React, {Component} from 'react';
import {
  View,
  Text,
  Container,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
  Content,
  Thumbnail,
} from 'native-base';
import Headers from '../../component/Headers';
import Event from '../../component/Event';
import EventBig from '../../component/EventBig';
import Footers from '../../component/Footer';
import {StyleSheet, FlatList} from 'react-native';
import axios from 'axios';
import {GetAuth, removeAuthKey} from '../../config/auth';

class Profile extends Component {
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

  handleLogout = async () => {
    try {
      await removeAuthKey();
      this.props.navigation.navigate('Auth');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state.user);
    return (
      <Container>
        {/* <Content > */}
        <View style={styles.Content}>
          <Thumbnail large source={{uri: this.state.user.image}} />
          <Text style={styles.Title}>{this.state.user.fullname}</Text>
          <Text style={styles.Title}>{this.state.user.email}</Text>
          <Button onPress={this.handleLogout} style={styles.logout}>
            <Text>Logout</Text>
          </Button>
        </View>
        {/* </Content> */}
      </Container>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  Title: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  Content: {
    alignItems: 'center',
    padding: 30,
  },
  logout: {
    backgroundColor: '#e7301c',
  },
});
