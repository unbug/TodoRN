import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import {Theme} from '../../styles';

let {height, width} = Dimensions.get('window');

class Header extends Component {
  handleAdd = ()=>{
    this.props.navigator.push({name: 'EditView'});
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg}
              source={require('./img/chalkboard.png')}>
          <Image style={styles.img} source={require('./img/todo.png')}/>
          <Text style={[styles.text, styles.title]}>
            Todo
          </Text>
          <Text style={[styles.text, styles.subTitle]}>
            React Native+Redux DEMO for React Native Training
          </Text>
          <TouchableHighlight
            activeOpacity={Theme.active.opacity}
            underlayColor='transparent'
            style={styles.add}
            onPress={this.handleAdd}>
            <Image source={require('./img/border_color.png')}/>
          </TouchableHighlight>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 240,
  },
  bg: {
    flex: 1,
    height: 240,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  img: {
    width: 100,
    height: 100
  },
  text: {
    paddingTop: 5,
    color: '#fff',
    fontSize: 15
  },
  title: {
    fontSize: 40
  },
  subTitle: {
    fontSize: 10,
    fontStyle: 'italic'
  },
  add: {
    position: 'absolute',
    right: 8,
    bottom: 8
  }
});

export default Header;
