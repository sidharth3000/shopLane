import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://shopify-4fede.firebaseio.com/'
});

export default instance;