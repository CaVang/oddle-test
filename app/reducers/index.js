import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';

// Combine reducers with connectRouter which keeps track of router state
const createRootReducer = (history) => combineReducers({
  user,
  router: connectRouter(history),
});

export default createRootReducer;
