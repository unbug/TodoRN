import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import { COLOR_GREEN, COLOR_BROWN, COLOR_RED, ACTIVE_OPACITY } from '../../constants/Theme';

let {height, width} = Dimensions.get('window');

class Bar extends Component {
  handleOK = ()=>{
    this.props.onOK();
  }
  handleCancel = ()=>{
    this.props.onCancel();
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          activeOpacity={ACTIVE_OPACITY}
          underlayColor='transparent'
          onPress={this.handleCancel}
          style={styles.btn}>
          <Image style={styles.btnIcon} source={require('./img/cancel_filled.png')}/>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={ACTIVE_OPACITY}
          underlayColor='transparent'
          onPress={this.handleOK}
          style={styles.btn}>
          <Image style={styles.btnIcon} source={require('./img/ok_filled.png')}/>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    width: 38,
    height: 38,
  },
  btnIcon: {
    width: 42,
    height: 42,
  },
});

export default Bar;
