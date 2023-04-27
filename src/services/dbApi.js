import axios from 'axios';

export const dbApi = axios.create({
  baseURL: 'https://buttowsk.pythonanywhere.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});