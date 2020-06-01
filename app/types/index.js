import { createAsyncTypes } from '../store/utilities'

export const SEARCH_USER_ASYNC = createAsyncTypes('SEARCH_USER');
export const USER_DETAIL_ASYNC = createAsyncTypes('USER_DETAIL');
export const USER_REPOS_ASYNC = createAsyncTypes('USER_REPOS');
export const USER_FOLLOWERS_ASYNC = createAsyncTypes('USER_FOLLOWERS');
export const TYPING_ASYNC = createAsyncTypes('TYPING');

export const TYPING = 'TYPING';

export const SEARCH_USER_START = 'SEARCH_USER_START';
export const SEARCH_USER_SUCCESS = 'SEARCH_USER_SUCCESS';

export const USER_DETAIL_START = 'USER_DETAIL_START';
export const USER_DETAIL = 'USER_DETAIL';
export const USER_REPOS = 'USER_REPOS';
export const USER_FOLLOWERS = 'USER_FOLLOWERS';
