import axios from 'axios';
import { perPage } from '../../config/app';

const github = axios.create({
  baseURL: 'https://api.github.com/',
});

github.defaults.headers.common.Authorization = `token bf9ef54806ada2c3eaf223d185b19ddacdda2230`;

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
