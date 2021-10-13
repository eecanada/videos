import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/search',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
});
