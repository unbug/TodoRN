import React, {Component} from 'react';
import Utils from '../../utils';

import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import ListItem from './ListItem';

class Main extends Component {
  render() {
    const { todos,actions } = this.props;
    function getList() {
      return todos.map(function (key, idx) {
        return <ListItem actions={actions} data={key} key={Utils.GUID()} isLast={idx==todos.length-1}/>;
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
