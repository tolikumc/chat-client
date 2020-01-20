import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004'
});

export const dialogsAPI = {
  getAll() {
    return instance.get('/dialogs');
  }
};