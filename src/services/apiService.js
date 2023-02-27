import axios from "axios";

import { baseURL } from "../configs";

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWZhN2JiOWVhNzA4YjA3ZjEwM2FjOGIwM2VjOTk0YiIsInN1YiI6IjYwY2UwOWMzNTFlNmFiMDA1OGVkM2IzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmUNsg3Wu41etbi32KK1UswcmseHmW0uvcRXWE1xrBI';

const apiService = axios.create({ baseURL });
apiService.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${accessToken}`
        return config
    }
);

export { apiService }
