import React, {Component} from 'react';
import {Footer, FooterTab, Button} from 'native-base';
import {StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {withNavigation} from 'react-navigation';

class Footers extends Component {
  render() {
    // const navigation = useNavigation();
    return (
      // <Container>
      // <Header />
      // <Content />
      <Footer style={styles.Footer}>
        <FooterTab style={styles.FooterTab}>
          <Button transparent>
            <Icon style={styles.Icon} name="home" />
          </Button>
          <Button
            transparent
            onPress={() => {
              this.props.navigation.navigate('Category');
            }}>
            <Icon style={styles.Icon} name="appstore-o" />
          </Button>
          <Button active transparent>
            <Icon style={styles.Icon} active name="search1" />
          </Button>
          <Button transparent>
            <Icons style={styles.Icon} name="account-circle-outline" />
          </Button>
        </FooterTab>
      </Footer>
      // </Container>
    );
  }
}

export default withNavigation(Footers);

const styles = StyleSheet.create({
  Footer: {
    height: 40,
  },

  FooterTab: {
    backgroundColor: '#ffffff',
  },

  Icon: {
    color: '#EF233C',
    fontSize: 20,
  },
});
