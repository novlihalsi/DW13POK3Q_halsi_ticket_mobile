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
import {StyleSheet, FlatList} from 'react-native';
import axios from 'axios';

class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      categoriesEvent: [],
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    const id = JSON.stringify(navigation.getParam('itemId'));
    axios
      .get(`https://halsiticket-api.herokuapp.com/api/v1/categories/${id}/showevent`)
      .then(res => {
        this.setState({categoriesEvent: res.data});
      });
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

  render() {
    console.log(this.state.categoriesEvent);
    return (
      <Container>
        <Content style={styles.Content}>
          <View>
            <Text style={styles.Title}>{this.state.categoriesEvent.name}</Text>
          </View>
          <FlatList
            data={this.state.categoriesEvent.event}
            renderItem={this.renderEvents}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </Content>
      </Container>
    );
  }
}

export default CategoryPage;

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
