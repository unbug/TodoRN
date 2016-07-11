import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import { ACTIVE_OPACITY } from '../../constants/Theme';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          activeOpacity={ACTIVE_OPACITY}
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
    height: 128/2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 40/2,
    backgroundColor: '#262729'
  },
  backButton: {
    paddingLeft: 46/2,
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF'
  }
});

export default Header;
