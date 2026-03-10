import axios from 'axios';

export const $api = axios.create({
  // baseURL: 'https://s3.ru1.storage.beget.cloud/8919b035f716-aero-nexus-data/',
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export const $weather = axios.create({
  baseURL: 'https://api.weatherstack.com/',
  headers: { 'Accept': 'application/json' },
});
