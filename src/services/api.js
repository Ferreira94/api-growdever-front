import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dashboard.heroku.com/apps/api-growdevers',
});

export default api;