import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducers from '../reducers';

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

//a dirty way to clear persisted old state
//Todo: if you've ran the old TodoRN version, uncomment this before get started.
//(async () => await AsyncStorage.clear())();

var middlewares = compose(applyMiddleware(thunk, logger), autoRehydrate());

export default function configureStore() {
  const store = createStore(reducers, undefined, middlewares);
  persistStore(store, {storage: AsyncStorage});
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}
