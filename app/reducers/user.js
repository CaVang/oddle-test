import { combineReducers } from 'redux';
import * as types from '../types';
import { createReducer } from '../store/utilities'

const users = createReducer({}, {
  [types.SEARCH_USER_ASYNC.PENDING](state) {
    return {
      ...state,
      searching: true
    }
  },
  [types.SEARCH_USER_ASYNC.SUCCESS](state, action) {
    return {
      ...state,
      ...action.payload,
      searching: false
    }
  },
  [types.SEARCH_USER_ASYNC.ERROR](state) {
    return {
      ...state,
      searching: false
    }
  }
});

const searchString = createReducer({}, {
  [types.TYPING_ASYNC.SUCCESS](state, action) {
    return {
      ...state,
      data: action.searchString
    }
  }
});

const detail = createReducer({}, {
  [types.USER_REPOS_ASYNC.PENDING](state) {
    return {
      ...state,
      searching: true
    }
  },
  [types.USER_REPOS_ASYNC.SUCCESS](state, action) {
    return {
      ...state,
      ...action.payload,
      searching: false
    }
  },
  [types.USER_REPOS_ASYNC.ERROR](state) {
    return {
      ...state,
      searching: false
    }
  },
  [types.USER_DETAIL_ASYNC.PENDING](state) {
    return {
      ...state,
      searching: true
    }
  },
  [types.USER_DETAIL_ASYNC.SUCCESS](state, action) {
    return {
      ...state,
      ...action.payload,
      searching: false
    }
  },
  [types.USER_DETAIL_ASYNC.ERROR](state) {
    return {
      ...state,
      searching: false
    }
  },
  [types.USER_FOLLOWERS_ASYNC.PENDING](state) {
    return {
      ...state,
      searching: true
    }
  },
  [types.USER_FOLLOWERS_ASYNC.SUCCESS](state, action) {
    return {
      ...state,
      ...action.payload,
      searching: false
    }
  },
  [types.USER_FOLLOWERS_ASYNC.ERROR](state) {
    return {
      ...state,
      searching: false
    }
  }
});

const userReducer = combineReducers({ users, searchString, detail });

export default userReducer;
