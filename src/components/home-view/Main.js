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
    var self = this;
    const { todos } = this.props;
    function getList() {
      return todos.map(function (key, idx) {
        return <ListItem {...self.props}
                         data={key}
                         key={key.id}
                         len={todos.length}
                         num={idx}
                         isFirst={idx===0}
                         isLast={idx===todos.length-1}/>;
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
