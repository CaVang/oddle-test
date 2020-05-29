import axios from 'axios';

import { apiEndpoint } from '../../config/app';

axios.defaults.baseURL = apiEndpoint;

export { default as searchService } from './search';
