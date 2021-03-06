import axios from 'axios';
import assignAll from 'lodash/fp/assignAll';
import parseLinkHeader from 'parse-link-header';

export const PER_PAGE = 12;

const github = axios.create({
    baseURL: 'https://api.github.com/',
});

const token = process.env.USER_SEARCH_OAUTH;
if (token) {
    github.defaults.headers.common.Authorization = `token ${token}`;
}

function addPagination(response) {
    const {data, headers} = response;
    const pagination = parseLinkHeader(headers.link);
    return assignAll([
        data,
        {pagination},
    ]);
}

function searchUsers(params) {
    const defaultParams = {
        per_page: PER_PAGE,
    };
    return github
        .get('/search/users', {
            params: assignAll([defaultParams, params]),
        })
        .then(addPagination);
}

function getProfile({ userName, uri }) {
    return github.get(`/users/${userName}${uri ? `/${uri}` : ''}`).then(response => response.data);
}

export default {
    searchUsers,
    getProfile,
    get: github.get,
};
