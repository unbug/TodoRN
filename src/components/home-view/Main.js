import React, {Component} from 'react';
import GUID from '../../utils/GUID';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import ListItem from './ListItem';

const list = [
  {title: 'Go Home'},
  {title: 'Go work'},
  {title: 'Go party'},
  {title: 'Go swimming'},
  {title: 'Go riding'},
  {title: 'Go walking'},
  {title: 'Go running'},
  {title: 'Go coding'}
];
class Main extends Component {
  render() {
    const { actions } = this.props;
    function getList() {
      return list.map(function (key, idx) {
        return <ListItem data={key} key={GUID()} isLast={idx==list.length-1}/>;
      });
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          {getList()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    padding: 20
  }
});

export default Main;
