import React, {Component} from 'react';

import {StyleSheet} from 'react-native';
import {Text, List, View, Content, ListItem, Container} from 'native-base';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';

export class OneCategory extends Component {
  render() {
    return (
      <Content>
        <List>
          <ListItem>
            <Text>{this.props.name}</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  renderCategory = ({item}) => {
    return <OneCategory name={item.name} />;
  };

  componentDidMount() {
    axios.get('http://192.168.1.63:5000/api/v1/categories').then(res => {
      this.setState({categories: res.data});
    });
  }

  render() {
    return (
      <Container>
        <View style={styles.View}>
          <Text style={styles.textTitle}>Category</Text>
        </View>
        <FlatList
          data={this.state.categories}
          renderItem={this.renderCategory}
        />
      </Container>
    );
  }
}

export default Category;

const styles = StyleSheet.create({
  View: {
    marginLeft: 17,
    marginTop: 20,
    marginBottom: 30,
  },

  textTitle: {
    fontSize: 30,
    color: '#EF233C',
  },
});
