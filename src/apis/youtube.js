import axios from 'axios';

const KEY = 'AIzaSyBcfL-QKwmCSLs76mS5lHuphaU2vwNLQl4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});