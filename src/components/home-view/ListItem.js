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
import {COLOR_BROWN, COLOR_RED, ACTIVE_OPACITY} from '../../constants/Theme';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = {timer: '', warning: false};
  }
  componentDidMount(){
    if(this.props.data.completed){
      this.setState({timer: 'completed', warning: false});
    }else{
      this.startTimer();
    }
  }
  componentWillUnmount(){
    this.endTimer();
  }
  startTimer = ()=>{
    var endTime = new Date(this.props.data.endTime),
      timer = Utils.DateHandler.fromNowTo(endTime);
    if(endTime.getTime()-new Date().getTime()){
      var warning = !(parseInt(timer.hour)) && parseInt(timer.minute)<50;
      this.setState({timer: timer.hour+':'+timer.minute+(warning?(':'+timer.second):''), warning: warning});
      this.looptimer = requestAnimationFrame(this.startTimer);
    }else{
      this.handleCompleted();
    }
  }
  endTimer(){
    this.looptimer && cancelAnimationFrame(this.looptimer);
  }

  handleCompleted = ()=>{
    this.endTimer();
    this.props.actions.completeTodo(this.props.data.id);
  }

  render() {
    return (
      <View style={[styles.container, {borderBottomWidth: this.props.isLast?0:1}]}>
        <TouchableHighlight
          activeOpacity={ACTIVE_OPACITY}
          underlayColor='transparent'
          onPress={this.handleCompleted}>
          <Image style={styles.btnIcon} source={
            this.state.timer==='completed'
            ?require('./img/checked_filled.png')
            :require('./img/checked.png')}/>
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={ACTIVE_OPACITY}
                            underlayColor='transparent'
                            style={styles.body} onPress={()=>{}}>
          <Text style={styles.text}>{this.props.data.title}</Text>
        </TouchableHighlight>
        <Text style={[styles.timer, {color: this.state.warning?COLOR_RED:'#000'}]}>{this.state.timer}</Text>
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
