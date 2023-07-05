import axios, { AxiosInstance } from 'axios';
import BASEURL from './BaseURL';

export const myAxiosInstance: AxiosInstance = axios.create({
	baseURL: BASEURL,
});
