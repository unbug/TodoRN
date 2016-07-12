import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
let {height, width} = Dimensions.get('window');

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg}
              source={require('./img/welldone.jpg')}>
          <Text style={[styles.text, styles.title]}>
            69
          </Text>
          <Image style={styles.add} source={require('./img/border_color.png')}/>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 480/2,
  },
  bg: {
    flex: 1,
    height: 480/2,
    width: width,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff'
  },
  title: {
    width: width/2,
    textAlign: 'center',
    fontSize: 60
  },
  add: {
    position: 'absolute',
    right: 8,
    bottom: 8
  }
});

export default Header;
