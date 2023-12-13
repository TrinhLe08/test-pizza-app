import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpRequestApi = axios.create({
  baseURL: 'https://api.kinpizza.com/api/v1/', 
});

httpRequestApi.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("authorization"); 
    config.headers.authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpRequestApi