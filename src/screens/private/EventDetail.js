import React, {Component} from 'react';

import {Image, StyleSheet} from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Button,
  Body,
  Right,
  Container,
  View,
  Content,
  ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Entypo';
import axios from 'axios';
class EventDetail extends Component {
  constructor() {
    super();
    this.state = {
      eventdetail: [],
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    const id = JSON.stringify(navigation.getParam('itemId'));
    axios
      .get(
        `https://halsiticket-api.herokuapp.com/api/v1/events/${id}/detailevent`,
      )
      .then(res => {
        this.setState({eventdetail: res.data});
      });
  }

  render() {
    return (
      <Container>
        <Content style={styles.Container}>
          <Card transparent>
            <CardItem cardBody>
              <Image
                source={{
                  uri: this.state.eventdetail.image,
                }}
                style={styles.images}
              />
            </CardItem>

            <CardItem>
              <Body style={styles.BodyTitle}>
                <Text style={styles.Title}>{this.state.eventdetail.title}</Text>
                <Text>
                  by{' '}
                  {this.state.eventdetail.user &&
                    this.state.eventdetail.user.fullname}
                </Text>
              </Body>
              <Right style={{alignSelf: 'flex-start'}}>
                <Button transparent>
                  <Icon name="favorite-border" style={styles.Favoriteicon} />
                </Button>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Icons name="calendar" style={styles.Icons} />
              <Text style={styles.textIcon}>
                {this.state.eventdetail.startTime}
              </Text>
            </CardItem>
            <CardItem cardBody>
              <Icons name="location" style={styles.Icons} />
              <Text style={styles.textIcon}>
                {this.state.eventdetail.address}
              </Text>
            </CardItem>
            <CardItem cardBody>
              <Icons name="ticket" style={styles.Icons} />
              <Text style={styles.textIcon}>
                {this.state.eventdetail.price}
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.secTitle}>Description</Text>
                <Text>{this.state.eventdetail.description}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.secTitle}>Location</Text>
                <Text>{this.state.eventdetail.address}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.secTitle}>Organizer</Text>
                <Text>
                  {this.state.eventdetail.user &&
                    this.state.eventdetail.user.fullname}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>

        <View style={styles.Viewbuttonbuy}>
          <Button full transparent style={styles.ButtonBuy}>
            <Text style={styles.BuyText}>Buy Tickets</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default EventDetail;

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    marginBottom: 10,
  },
  textIcon: {
    marginLeft: 10,
  },

  secTitle: {
    fontSize: 18,
  },

  Title: {
    fontSize: 30,
    color: '#e7301c',
  },

  Icons: {
    color: '#e7301c',
    marginLeft: 20,
  },

  BodyTitle: {
    flex: 4,
    padding: 4,
  },

  Favoriteicon: {
    fontSize: 30,
  },

  images: {
    width: '100%',
    height: 200,
    margin: 0,
    borderRadius: 10,
  },

  Viewbuttonbuy: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },

  ButtonBuy: {
    backgroundColor: '#e7301c',
    borderRadius: 20,
  },

  BuyText: {
    color: 'white',
  },
});
