import axios from 'axios';

// normally should be stored in one if .env files
const REACT_APP_BOOKS_URL = 'http://localhost:3001/api';

export default axios.create({
  baseURL: REACT_APP_BOOKS_URL,
});
