import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  Dimensions
} from 'react-native';
let {height, width} = Dimensions.get('window');
const WEBVIEW_REF = 'webview';
const DEFAULT_URL = 'about:blank';

class Main extends Component {
  state = {
    url: DEFAULT_URL,
    status: 'No Page Loaded',
    backButtonEnabled: false,
    forwardButtonEnabled: false,
    loading: false,
    scalesPageToFit: true,
  }
  componentDidMount(){
    this.setState({
      url: this.props.url
    });
  }
  goBack = () =>{
    this.refs[WEBVIEW_REF].goBack();
  }

  goForward = () =>{
    this.refs[WEBVIEW_REF].goForward();
  }

  reload = () =>{
    this.refs[WEBVIEW_REF].reload();
  }

  onShouldStartLoadWithRequest = (event) => {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  }

  onNavigationStateChange = (navState) => {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          style={styles.webview}
          source={{uri: this.state.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={true}
          allowsInlineMediaPlayback={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  webview: {
    flex: 1,
    width: width,
    backgroundColor: '#FFF'
  }
});

export default Main;
