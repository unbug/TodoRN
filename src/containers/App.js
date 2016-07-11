import React, {Component} from 'react';
import { Navigator } from 'react-native';
import MainTabsView from './MainTabsView';
import BroswerView from './BroswerView';

const ROUTES = {
  main_tabs_view: MainTabsView,
  broswer_view: BroswerView
}

class App extends Component {
  renderScene = (route, navigator) => {
    let Scene = ROUTES[route.name];
    switch (route.name){
      case 'main_tabs_view':
        return <Scene navigator={navigator} tab={0}/>;
      case 'broswer_view':
        return <Scene
          url={route.url}
          navigator={navigator}/>;
    }
  }
  configureScene = (route, routeStack) => {
    switch (route.name){
      default:
            return Navigator.SceneConfigs.PushFromRight;
    }
  }
  render() {
    return <Navigator
      initialRoute={{name: 'main_tabs_view'}}
      renderScene={this.renderScene}
      configureScene={this.configureScene}/>
  }
}

export default App;
