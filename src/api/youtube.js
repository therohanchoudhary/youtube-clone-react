import axios from 'axios';

const KEY = 'AIzaSyD80Jdxnuft5bCICo9C-RfAZdWdhS6GyuU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY,
    }
});