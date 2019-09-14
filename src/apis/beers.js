import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.punkapi.com/v2/beers',
    params: {
        page: 1,
        per_page: 15
    }
});