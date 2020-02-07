import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Input,
  Icon,
  Item,
  View,
} from 'native-base';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Headers extends Component {
  render() {
    return (
      <View>
        {/* <Header
          noShadow
          searchBar
          rounded
          transparent
          androidStatusBarColor="#EF233C"> */}
        {/* // style={{backgroundColor: '#EF233C'}} */}
        {/* <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left> */}
        {/* <Body>
            <Title style={{color: '#EF233C'}}>Halsi Ticket</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="ios-log-in" style={{color: '#EF233C'}} />
            </Button>
          </Right>
        </Header> */}
        <Header
          noShadow
          searchBar
          rounded
          androidStatusBarColor="#062639"
          style={{backgroundColor: '#062639'}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </Header>
      </View>
    );
  }
}

export default Headers;
