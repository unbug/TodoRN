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
  constructor(props){
    super(props);
    this.state = {isVisible: true}
  }
  componentDidMount(){
    this.currentRoute = this.props.navigator.navigationContext.currentRoute;
    this.bindEvents();

    //todo: run gulp before uncomment this
    //fetch data from server
    this.props.actions.fetchAllTodos();
  }
  componentWillUnmount(){
    this.unBindEvents();
  }
  bindEvents = ()=>{
    this.willFocusSubscription  = this.props.navigator.navigationContext.addListener('willfocus', (event) => {
      if (this.currentRoute !== event.data.route) {
        this.setState({isVisible: false});
      }
    });
    this.didFocusSubscription  = this.props.navigator.navigationContext.addListener('didfocus', (event) => {
      if (this.currentRoute === event.data.route) {
        this.setState({isVisible: true});
      }
    });
  }
  unBindEvents = ()=>{
    this.willFocusSubscription.remove();
    this.didFocusSubscription.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props}/>
        <Main {...this.props} isVisible={this.state.isVisible}/>
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

