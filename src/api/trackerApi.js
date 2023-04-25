import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'https://ea0b-2601-646-c900-c3f0-00-cf6a.ngrok.io'
});

//handling requests to the API to save track data
instance.interceptors.request.use(
    //this 1st func. will automatically be called when we make the request
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        //if a token is present, add it to the headers
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;