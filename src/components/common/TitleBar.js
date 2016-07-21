import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Theme} from '../../styles';

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
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.color.green
  },
  text: {
    marginTop: 20,
    color: '#FFFFFF',
    fontSize: 16
  }
});

export default TitleBar;
