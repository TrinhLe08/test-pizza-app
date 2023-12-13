import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpRequest = axios.create({
  baseURL: 'http://192.168.2.11:10000/api/v1/', 
});

httpRequest.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("authorization"); 
    config.headers.authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpRequest;