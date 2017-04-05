import axios from 'axios';

export const FETCH_URLS = 'FETCH_URLS';
export const SHORTEN_URL = 'SHORTEN_URL';
const ROOT_URL = 'http://localhost:3000/api';
// TODO: add API key functionality

export function fetchUrls() {
  const request = axios.get(`${ROOT_URL}/url`);
  return {
    type: FETCH_URLS,
    payload: request
  }
}

export function shortenUrl(props) {
  const request = axios.post(`${ROOT_URL}/url`, props);
  return {
    type: SHORTEN_URL,
    payload: request
  }
}