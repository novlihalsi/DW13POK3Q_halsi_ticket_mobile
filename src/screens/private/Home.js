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
} from 'native-base';
import Headers from '../../component/Headers';
import Event from '../../component/Event';
import EventBig from '../../component/EventBig';
import Footers from '../../component/Footer';
import {StyleSheet, StatusBar} from 'react-native';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import {getAuthKey, removeAuthKey} from '../../config/auth';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  handlePressEvent = id => () => {
    this.props.navigation.navigate('EventDetail', {
      itemId: id,
    });
  };

  renderEvents = ({item}) => {
    return (
      <Event
        getId={this.handlePressEvent(item.id)}
        image={item.image}
        title={item.title}
        price={item.price}
        date={item.startTime.substring(0, 10)}
      />
    );
  };

  renderBigEvents = ({item}) => {
    return (
      <EventBig
        getId={this.handlePressEvent(item.id)}
        image={item.image}
        title={
          item.title.length > 20
            ? item.title.substring(0, 25) + '...'
            : item.title
        }
        price={item.price}
        date={item.startTime.substring(0, 10)}
      />
    );
  };

  componentDidMount() {
    axios
      .get('https://halsiticket-api.herokuapp.com/api/v1/events')
      .then(res => {
        this.setState({events: res.data});
        // console.log(res.data);
      });
  }

  render() {
    return (
      <Container>
        <Headers />
        <Content style={styles.Content}>
          <View>
            <Text style={styles.Title}>Today</Text>
          </View>
          <FlatList
            horizontal
            data={this.state.events}
            renderItem={this.renderBigEvents}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
          <View>
            <Text style={styles.Title}>Upcoming Event</Text>
          </View>

          <FlatList
            data={this.state.events}
            renderItem={this.renderEvents}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </Content>
        <View>
          <Footers />
        </View>
      </Container>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  Title: {
    color: '#232020',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  Content: {
    padding: 15,
    backgroundColor: '#f4f4f4',
  },
});
