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
import {Theme, BasicStyle} from '../../styles';

class ListItem extends Component {
  handleDelete = ()=>{
    Alert.alert(
      'Delete item?',
      'This cannot be undone.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.props.actions.deleteTodo(this.props.data.id)}
      ]
    )
  }
  handleEdit = ()=>{
    this.props.navigator.push({name: 'EditView', data: this.props.data});
  }
  render() {
    const getTimer = ()=>{
      return Utils.DateHandler.timeLogFromNowTo(new Date(this.props.data.completedTime||this.props.data.endTime));
    }
    return (
      <View style={[styles.container, {borderBottomWidth: this.props.isLast?0:1}]}>
        <TouchableHighlight
          activeOpacity={Theme.active.opacity}
          underlayColor='transparent'
          onPress={this.handleDelete}>
          <Image style={styles.btnIcon} source={require('./img/erase.png')}/>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={Theme.active.opacity}
          underlayColor='transparent'
          style={styles.body}
          onPress={this.handleEdit}>
          <Text style={BasicStyle.text}>{this.props.data.title}</Text>
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
    borderBottomColor: Theme.color.brown
  },
  body: {
    flex: 1,
    padding: 15,
  },
  btnIcon: {
    width: 24,
    height: 24
  },
  timer: {
    fontSize: 12,
    fontStyle: 'italic'
  }
});

export default ListItem;
