import { ENV } from './env';

export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';
export const isClient = typeof window !== 'undefined';

export const apiEndpoint = 'https://api.github.com/';
export const perPage = 15;
// Replace with 'UA-########-#' or similar to enable tracking
export const trackingID = null;
