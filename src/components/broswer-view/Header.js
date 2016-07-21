import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import {Theme} from '../../styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          activeOpacity={Theme.active.opacity}
          onPress={()=>this.props.onBack()}>
          <Image
            style={styles.backButton}
            source={require('./img/back_arrow.png')}>
          </Image>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    backgroundColor: '#262729'
  },
  backButton: {
    paddingLeft: 23,
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF'
  }
});

export default Header;
