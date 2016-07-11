import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import { ACTIVE_OPACITY } from '../../constants/Theme';
let {height, width} = Dimensions.get('window');

class Main extends Component {
  render() {
    console.log('some text');
    const { actions } = this.props;
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 158/750*width,
    paddingRight: 158/750*width,
    paddingBottom: 80/2
  },
  button: {
    alignItems: 'center'
  },
  buttonText: {
    paddingTop: 16/2,
    color: '#b2b2b2'
  },
  link: {
    position: 'absolute',
    bottom: 0,
    width: width,
    alignItems: 'center',
    paddingBottom: 66/2
  },
  linkText: {
    color: '#71b0ea',
    fontSize: 30/2
  }
});

export default Main;
