import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
let {height, width} = Dimensions.get('window');

class Main extends Component {
  render() {
    const { actions } = this.props;
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});

export default Main;
