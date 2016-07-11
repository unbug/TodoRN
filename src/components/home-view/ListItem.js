import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import {COLOR_BROWN} from '../../constants/Theme';

class ListItem extends Component {
  render() {
    return (
      <View style={[styles.container, {borderBottomWidth: this.props.isLast?0:1}]}>
        <TouchableHighlight>
          <Image style={styles.btnIcon} source={require('./img/ok.png')}/>
        </TouchableHighlight>
        <View style={styles.body}><Text style={styles.text}>{this.props.data.title}</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BROWN
  },
  body: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  btnIcon: {
    width: 24,
    height: 24
  },
  text: {
    fontSize: 16
  }
});

export default ListItem;
