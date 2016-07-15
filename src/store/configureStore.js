import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';
var createLogger = require('redux-logger');
var {persistStore, autoRehydrate} = require('redux-persist');
var {AsyncStorage} = require('react-native');

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

var createAppStore = applyMiddleware(logger)(createStore);

export default function configureStore() {
  const store = createAppStore(reducers, undefined, autoRehydrate());
  persistStore(store, {storage: AsyncStorage});
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}
