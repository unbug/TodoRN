import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import {
  Bar,
  Main,
} from '../components/edit-view';
let {height, width} = Dimensions.get('window');
import Actions from '../actions';

class HomeView extends Component {
  constructor(props){
    super(props);
  }
  forData = {};
  close = ()=>{
    this.props.navigator.pop();
  }
  handleUpdate = (data)=>{
    this.forData = data;
  }
  handleCancel = ()=>{
    this.close();
  }
  handleSubmit = ()=>{
    if(this.props.data){
      this.props.actions.editTodo(this.props.data.id, this.forData.title, this.forData.hour);
    }else{
      this.props.actions.addTodo(this.forData.title, this.forData.hour);
    }
    this.close();
  }
  render() {
    return (
      <Image style={styles.container} source={require('../components/edit-view/img/bg.png')}>
        <Main {...this.props} onUpdate={this.handleUpdate}/>
        <Bar onCancel={this.handleCancel} onSubmit={this.handleSubmit}/>
      </Image>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height
  }
});

function mapStateToProps(state) {
  return {
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

