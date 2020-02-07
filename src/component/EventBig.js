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
  Left,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigation} from 'react-navigation';
class EventBig extends Component {
  render() {
    // const length = this.props.title.length;
    return (
      // <Container>
      <Card noShadow style={{width: 300}}>
        <CardItem cardBody>
          <Image
            source={{
              uri: this.props.image,
            }}
            style={{
              flex: 1,
              width: '100%',
              height: 150,
              margin: 10,
            }}
          />
        </CardItem>

        <CardItem>
          <Body style={{flex: 4, padding: 5}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 20,
              }}
              onPress={this.props.getId}>
              {this.props.title}
            </Text>
            {/* <Text style={{color: '#e7301c'}}>{this.props.price}</Text> */}
            <Text>{this.props.date}</Text>
            {/* <Text>{this.props.description}</Text> */}
          </Body>
        </CardItem>
        <CardItem style={{alignSelf: 'flex-end'}}>
          <Right>
            <Button transparent>
              <Icon name="favorite-border" style={{fontSize: 30}} />
            </Button>
          </Right>
        </CardItem>
      </Card>
      // </Container>
    );
  }
}

export default withNavigation(EventBig);
