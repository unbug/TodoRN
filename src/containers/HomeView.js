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

  handleClickMainButtons = (type)=>{
    switch (type){
      case 'link':
        this.props.navigator.push({name: 'broswer_view', url: 'http://m.deja.me/dejafm/?1#/homepageguide/'});
    }
  }
  handleSwitchTab = (type)=>{
    switch (type){
      case 'explore':
        this.props.navigator.push({name: 'broswer_view', url: 'http://m.deja.me/dejafm/?1#/outfits/'});
    }
  }
  render() {
    const { actions, banner } = this.props;

    return (
      <View style={styles.container}>
        <Header banner={banner}></Header>
        <Main onClickMainButtons={this.handleClickMainButtons}></Main>
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
    banner: state.banner
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

