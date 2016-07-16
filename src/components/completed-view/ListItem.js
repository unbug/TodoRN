import React, {Component} from 'react';
import Utils from '../../utils';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import {COLOR_BROWN, COLOR_RED, ACTIVE_OPACITY} from '../../constants/Theme';

class ListItem extends Component {
  handleDelete = ()=>{
    Alert.alert(
      'Confirm',
      'Are you sure?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.props.actions.deleteTodo(this.props.data.id)}
      ]
    )
  }
  handleEdit = ()=>{
    this.props.navigator.push({name: 'edit_view', data: this.props.data});
  }
  render() {
    var self = this;
    function getTimer() {
      return Utils.DateHandler.timeLogFromNowTo(new Date(self.props.data.completedTime||self.props.data.endTime));
    }
    return (
      <View style={[styles.container, {borderBottomWidth: this.props.isLast?0:1}]}>
        <TouchableHighlight
          activeOpacity={ACTIVE_OPACITY}
          underlayColor='transparent'
          onPress={this.handleDelete}>
          <Image style={styles.btnIcon} source={require('./img/cancel_2_filled.png')}/>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={ACTIVE_OPACITY}
          underlayColor='transparent'
          style={styles.body}
          onPress={this.handleEdit}>
          <Text style={styles.text}>{this.props.data.title}</Text>
        </TouchableHighlight>
        <Text style={styles.timer}>{getTimer()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BROWN
  },
  body: {
    flex: 1,
    padding: 15,
  },
  btnIcon: {
    width: 24,
    height: 24
  },
  text: {
    fontSize: 16
  },
  timer: {
    fontSize: 12,
    fontStyle: 'italic'
  }
});

export default ListItem;
