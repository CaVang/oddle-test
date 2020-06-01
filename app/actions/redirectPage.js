import { push } from 'connected-react-router';
import { searchService } from '../services';
import * as types from '../types';
import { perPage } from '../../config/app';

export function typing(text) {
    return {
        type: types.TYPING,
        searchString: text
    };
}

export function redirectPage({ q = '', page = 1 }) {
    return (dispatch) => {
        dispatch(push(`/search?per_page=${perPage}&q=${q}&page=${page}`));
    };
}

function addUserDetail(payload) {
    return {
        type: types.USER_DETAIL,
        payload,
    };
}

function beginGetDetail() {
    return { type: types.USER_DETAIL_START };
}

export function getUserDetails(username) {
    return (dispatch) => {
        dispatch(beginGetDetail());

        return searchService().getUserDetail(username).then(response => {
            const { data } = response;
            dispatch(addUserDetail(data));
        })
            .catch(() => {
            });
    };
}

function addUserRepos(payload) {
    return {
        type: types.USER_DETAIL,
        payload,
    };
}

export function getUserRepos(username) {
    return (dispatch) => {
        dispatch(beginGetDetail());

        return searchService().getUserRepos(username).then(response => {
            const { data } = response;
            dispatch(addUserRepos({ repos: data }));
        })
            .catch(() => {
            });
    };
}

function addUserFollowers(payload) {
    return {
        type: types.USER_FOLLOWERS,
        payload,
    };
}

export function getUserFollowers(username) {
    return (dispatch) => {
        dispatch(beginGetDetail());

        return searchService().getUserFollowers(username).then(response => {
            const { data } = response;
            dispatch(addUserFollowers({ followersList: data }));
        })
            .catch(() => {
            });
    };
}
