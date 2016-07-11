import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  StyleSheet,
  View
} from 'react-native';
import {
  Main
} from '../components/broswer-view';
import TitleBar from '../components/common/TitleBar';
import Actions from '../actions';

class BroswerView extends Component {
  handleBack = ()=>{
    this.props.navigator.pop();
  }
  render() {
    const { actions, url } = this.props;

    return (
      <View style={styles.container}>
        {/*<Header onBack={this.handleBack}></Header>*/}
        <TitleBar title={this.props.title||''}/>
        <Main actions={actions} url={url}></Main>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
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
)(BroswerView);

