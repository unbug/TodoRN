import React, {Component} from 'react';
import Utils from '../../utils';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import {Theme, BasicStyle} from '../../styles';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = {timer: '00:00:00', warning: false};
  }
  looptimer = 0;
  lastUpdateTime = 0;
  componentDidMount(){
    this.startTimer();
  }
  componentDidUpdate(){
    !this.looptimer && this.startTimer();
  }
  componentWillUnmount(){
    this.endTimer();
  }
  getCompleted = ()=>{
    return this.props.data.completed || ((new Date().getTime()-new Date(this.props.data.endTime).getTime())>=0);
  }
  startTimer = ()=>{
    if(this.getCompleted()){ return;}
    var endTime = new Date(this.props.data.endTime),
      timer = Utils.DateHandler.fromNowTo(endTime),
      now = new Date().getTime();
    if(endTime.getTime()-now){
      if(this.props.isVisible){
        var warning = !(parseInt(timer.hour)) && parseInt(timer.minute)<30;
        if(this.props.num<3){
          this.setState({
            timer: `${timer.hour}:${timer.minute}:${timer.second}''`,
            warning: warning
          });
        }else if(now-this.lastUpdateTime>1000*30){
          this.lastUpdateTime = now;
          this.setState({
            timer: `${timer.hour}:${timer.minute}`,
            warning: warning
          });
        }
      }
      this.looptimer = requestAnimationFrame(this.startTimer);
    }else{
      this.handleCompleted();
    }
  }
  endTimer = ()=>{
    this.looptimer && cancelAnimationFrame(this.looptimer);
    this.looptimer = null;
  }

  handleCompleted = ()=>{
    this.endTimer();
    this.props.actions.completeTodo(this.props.data.id);
  }
  handleEdit = ()=>{
    this.props.navigator.push({name: 'EditView', data: this.props.data});
  }
  render() {
    return (
      <View style={[styles.container, {borderBottomWidth: this.props.isLast?0:1}]}>
        <TouchableHighlight
          activeOpacity={Theme.active.opacity}
          underlayColor='transparent'
          onPress={this.handleCompleted}>
          <Image style={styles.btnIcon} source={
            this.getCompleted()
            ?require('./img/checked_filled.png')
            :require('./img/checked.png')}/>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={Theme.active.opacity}
          underlayColor='transparent'
          style={styles.body}
          onPress={this.handleEdit}>
          <Text style={BasicStyle.text}>{this.props.data.title}</Text>
        </TouchableHighlight>
        <Text style={[styles.timer, {color: this.state.warning&&!this.getCompleted()?Theme.color.red:'#000'}]}>{this.getCompleted()?'completed':this.state.timer}</Text>
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
