import { combineReducers } from 'redux';
import * as types from '../types';

const users = (
    state = {},
    action
) => {
  switch (action.type) {
    case types.SEARCH_USER_START:
      return { ...state, searching: true };
    case types.SEARCH_USER_SUCCESS:
      return { ...state, searching: false, ...action.payload };
    default:
      return state;
  }
};

const searchString = (
    state = '',
    action
) => {
  switch (action.type) {
    case types.TYPING:
      return action.searchString;
    default:
      return state;
  }
};

const detail = (state = {}, action) => {
  switch (action.type) {
    case types.USER_DETAIL:
    case types.USER_REPOS:
      return { ...state, searching: false, ...action.payload };
    case types.USER_FOLLOWERS:
      return { ...state, searching: false, ...action.payload };
    case types.USER_DETAIL_START:
      return { ...state, searching: true };
    default:
      return state;
  }
}

const userReducer = combineReducers({ users, searchString, detail });

export default userReducer;
