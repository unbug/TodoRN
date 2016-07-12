import React, {Component} from 'react';
import Utils from '../../utils';

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


function getEndTime() {
  var endtime = new Date();
  endtime.setHours(endtime.getHours()+Utils.Number.randomArbitrary(0,5));
  endtime.setMinutes(0);
  return endtime.getTime();
}

const list = [
  {title: 'Go Home', endTime: getEndTime(), completed: false},
  {title: 'Go work', endTime: getEndTime(), completed: false},
  {title: 'Go party', endTime: getEndTime(), completed: false},
  {title: 'Go swimming', endTime: getEndTime(), completed: false},
  {title: 'Go riding', endTime: getEndTime(), completed: false},
  {title: 'Go walking', endTime: getEndTime(), completed: false},
  {title: 'Go running', endTime: getEndTime(), completed: false},
  {title: 'Go coding', endTime: getEndTime(), completed: false}
];

class Main extends Component {
  render() {
    const { actions } = this.props;
    function getList() {
      return list.map(function (key, idx) {
        return <ListItem data={key} key={Utils.GUID()} isLast={idx==list.length-1}/>;
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
