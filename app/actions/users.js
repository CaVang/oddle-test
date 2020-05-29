import { push } from 'connected-react-router';
import { searchService } from '../services';
import parseLinkHeader from 'parse-link-header';
import assignAll from 'lodash/fp/assignAll';
import * as types from '../types';
import { perPage } from '../../config/app';

function beginSearch() {
    return { type: types.SEARCH_USER_START };
}

function addPagination(payload) {
    return {
        type: types.SEARCH_USER_SUCCESS,
        payload,
    };
}

export function searchUsers({ q = '', page = 1 }) {
    return (dispatch) => {
        dispatch(beginSearch());

        return searchService().searchUsers(q, page)
            .then(response => {
                const { data, headers } = response;
                const pagination = parseLinkHeader(headers.link);
                dispatch(addPagination(assignAll([data, { pagination }])));
            })
            .catch(() => {
            });
    };
}

export function typing(text) {
    return {
        type: types.TYPING,
        searchString: text
    };
}

export function redirectPage({ q = '', page = 1 }) {
    return (dispatch) => {
        dispatch(push(`/search?per_page=${perPage}&q=${q}&page=${page}`));
        if (page === 1) {
            dispatch(searchUsers({ q, page }));
        }
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
