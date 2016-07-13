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
} from '../components/home-view';
import Actions from '../actions';

class HomeView extends Component {
  handleEdit = (data)=>{
    this.props.navigator.push({name: 'edit_view', data: data});
  }
  render() {
    return (
      <View style={styles.container}>
        <Header onEdit={this.handleEdit}/>
        <Main {...this.props} onEdit={this.handleEdit}/>
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
    todos: state.todos
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
)(HomeView);

