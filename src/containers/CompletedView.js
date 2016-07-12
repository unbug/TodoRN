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
  handleEdit = ()=>{
    this.props.navigator.push({name: 'edit_view'});
  }
  render() {
    return (
      <View style={styles.container}>
        <Header onEdit={this.handleEdit} num={this.props.todos.length}/>
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
    todos: state.todos.filter(todo=> todo.completed)
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

