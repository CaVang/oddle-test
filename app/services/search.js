import axios from 'axios';
import { perPage } from '../../config/app';

const github = axios.create({
  baseURL: 'https://api.github.com/',
});

github.defaults.headers.common.Authorization = `token e9d680d17ab7dff395df1cb8b6f45dc3ab8f4a40`;

export default () => {
  return {
    searchUsers: (q, page) => github.get('/search/users', {
      params: { per_page: perPage, q, page },
    }),
    getUserDetail: (username) => github.get(`/users/${username}`),
    getUserRepos: (username) => github.get(`/users/${username}/repos`),
    getUserFollowers: (username) => github.get(`/users/${username}/followers`),
  };
};
