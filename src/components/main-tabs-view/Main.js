import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
let {height, width} = Dimensions.get('window');

class Main extends Component {
  handleSwitchTab = (idx)=>{
    this.props.actions.switchMainTab(idx);
  }
  render() {
    const { renderTab, tab } = this.props;

    return (
      <TabNavigator
        style={styles.container}>
        <TabNavigator.Item
          style={styles.item}
          title="Home"
          selected={tab === 0}
          onPress={()=> this.handleSwitchTab(0)}
          renderIcon={() => <Image source={require('./img/home.png') }/>}
          renderSelectedIcon={() => <Image source={require('./img/home_filled.png')}/>}>
          {renderTab(0)}
        </TabNavigator.Item>
        <TabNavigator.Item
          style={styles.item}
          title="Completed"
          selected={tab === 1}
          onPress={()=> this.handleSwitchTab(1)}
          renderIcon={() => <Image source={require('./img/checked.png') }/>}
          renderSelectedIcon={() => <Image source={require('./img/checked_filled.png')}/>}>
          {renderTab(1)}
        </TabNavigator.Item>
        <TabNavigator.Item
          style={styles.item}
          title="Book"
          selected={tab === 2}
          onPress={()=> this.handleSwitchTab(2)}
          renderIcon={() => <Image source={require('./img/bookmark.png') }/>}
          renderSelectedIcon={() => <Image source={require('./img/bookmark_filled.png')}/>}>
          {renderTab(2)}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    height: height-49
  }
});

export default Main;
