import axios from 'axios';
import { perPage, githubToken } from '../../config/app';

const github = axios.create({
  baseURL: 'https://api.github.com/',
});

github.defaults.headers.common.Authorization = `token ${githubToken}`;

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
