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
import {StyleSheet} from 'react-native';

class CategoryPage extends Component {
  render() {
    return (
      <Container>
        <Headers />
        <Content style={styles.Content}>
          <View>
            <Text style={styles.Title}>Category</Text>
          </View>
          <Event />
          <Event />
          <Event />
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
