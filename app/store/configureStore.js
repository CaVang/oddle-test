import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from '../reducers';
import { isClient, isDebug } from '../../config/app';
import createSagaMiddleware from 'redux-saga';
import { initSagas } from './sagas'

export default function configureStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware();
  // Installs hooks that always keep react-router and redux store in sync
  const middleware = [sagaMiddleware, thunk, routerMiddleware(history)];
  let store;

  if (isClient && isDebug) {
    middleware.push(createLogger());
    store = createStore(createRootReducer(history), initialState, composeWithDevTools(
      applyMiddleware(...middleware),
    ));
  } else {
    store = createStore(createRootReducer(history), initialState, compose(applyMiddleware(...middleware), (f) => f));
  }

  initSagas(sagaMiddleware);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('../reducers');

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
