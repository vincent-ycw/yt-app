import axios from 'axios';

const KEY = 'AIzaSyAt_iw61vdx0GGPmjjl1z29RsnzVqmt48o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
