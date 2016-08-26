import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView
} from 'react-native';
import ListItem from './ListItem';

class Main extends Component {
  renderList = () => {
    const { todos } = this.props;
    if(!todos || !todos.data){ return null}
    return todos.data.map((key, idx) => {
      return <ListItem {...this.props}
                       data={key}
                       key={key.id}
                       len={todos.length}
                       num={idx}
                       isFirst={idx===0}
                       isLast={idx===todos.length-1}/>;
    });
  }
  renderLoading = () => {
    if (this.props.todos.isFetchingAllTodos) {
      return (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )
    }
    return null;
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderLoading()}
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
  loading: {
    paddingTop: 10,
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 12,
    fontStyle: 'italic'
  },
  list: {
    flex: 1,
    padding: 20
  }
});

export default Main;
