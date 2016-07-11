import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class TitleBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262729'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 32/2
  }
});

export default TitleBar;
