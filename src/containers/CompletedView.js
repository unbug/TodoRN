import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  StyleSheet,
  View
} from 'react-native';
import {
  Header,
  Main,
} from '../components/completed-view';
import Actions from '../actions';

class CompletedView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props} num={this.props.todos.length}/>
        <Main {...this.props}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

function mapStateToProps(state) {
  return {
    todos: state.todos.data.filter(todo => {
      return todo.completed || ((new Date().getTime()-new Date(todo.endTime).getTime())>0)
    })
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompletedView);

