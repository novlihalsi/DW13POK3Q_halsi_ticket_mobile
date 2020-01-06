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
import Headers from '../component/Headers';
import Event from '../component/Event';
import EventBig from '../component/EventBig';
import Footers from '../component/Footer';
import {StyleSheet, StatusBar} from 'react-native';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';

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
        title={item.title}
        price={item.price}
        date={item.startTime.substring(0, 10)}
      />
    );
  };

  componentDidMount() {
    axios.get('http://192.168.1.63:5000/api/v1/events').then(res => {
      this.setState({events: res.data});
      console.log(res.data);
    });
  }
  render() {
    // console.log(this.state.events[0].title);
    return (
      <Container>
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
            <Text style={styles.Title}>Up Coming Event</Text>
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
    color: '#EF233C',
    fontWeight: 'bold',
    fontSize: 20,
  },
  Content: {
    padding: 15,
  },
});
