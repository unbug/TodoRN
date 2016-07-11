import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import { ACTIVE_OPACITY } from '../../constants/Theme';

class BottomBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.buttonWraper}
          underlayColor="transparent"
          activeOpacity={ACTIVE_OPACITY}
          onPress={()=>this.props.onSwitchTab('find')}>
          <View style={styles.button}>
            <Image source={require('./img/find-clothes_icon.png')}/>
            <Text style={[styles.text, styles.name]}>
              Find Clothes
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttonWraper}
          underlayColor="transparent"
          activeOpacity={ACTIVE_OPACITY}
          onPress={()=>this.props.onSwitchTab('wardrobe')}>
          <View style={styles.button}>
            <Image source={require('./img/wardrobe_icon.png')}/>
            <Text style={[styles.text, styles.name]}>
              Wardrobe
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttonWraper}
          underlayColor="transparent"
          activeOpacity={ACTIVE_OPACITY}
          onPress={()=>this.props.onSwitchTab('explore')}>
          <View style={styles.button}>
            <Image source={require('./img/explore_icon.png')}/>
            <Text style={[styles.text, styles.name]}>
              Explore
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 112/2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2/2,
    borderTopColor: '#b2b2b2'
  },
  buttonWraper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default BottomBar;
