import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions
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
              source={require('./img/welldone.jpg')}>
          <Text style={[styles.text, styles.title]}>
            {this.props.num}
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
