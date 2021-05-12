import Axios from 'axios';

export const baseURL = `https://swapi.dev/api`;

export const axiosInstance = Axios.create({ baseURL });
