import React, {Component} from 'react';

import {Image} from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Button,
  Body,
  Right,
  Container,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
class Event extends Component {
  render() {
    return (
      // <Container>
      <Card noShadow>
        <CardItem>
          <Image
            source={{
              uri: this.props.image,
            }}
            style={{
              flex: 2,
              width: '100%',
              height: 100,
              borderRadius: 10,
            }}
          />

          <Body style={{flex: 4, padding: 5}}>
            <Text>{this.props.title}</Text>
            <Text>Rp. {this.props.price}</Text>
            <Text>{this.props.date}</Text>
          </Body>
          <Right style={{alignSelf: 'flex-end'}}>
            <Button transparent>
              <Icon
                name="favorite-border"
                style={{fontSize: 20, color: '#EF233C'}}
              />
            </Button>
          </Right>
        </CardItem>
      </Card>
      // </Container>
    );
  }
}

export default Event;
