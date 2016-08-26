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

class Main extends Component {
  renderList  = () =>{
    const { todos } = this.props;
    if(!todos){ return null}
    return todos.map((key, idx) => {
      return <ListItem {...this.props} data={key} key={key.id} isLast={idx==todos.length-1}/>;
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          {this.renderList()}
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
