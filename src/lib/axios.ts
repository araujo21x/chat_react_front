import axios from 'axios';

const myAxiosInstance = axios.create({
	baseURL: 'http://localhost:4000/',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

myAxiosInstance.interceptors.request.use(
	(config) => {
		const isToken = localStorage.getItem('token');
		if (isToken) {
			config.headers.Authorization = `Bearer ${isToken}`;
		}

		return config;
	},

	function (error) {
		return Promise.reject(error);
	}
);

export default myAxiosInstance;
