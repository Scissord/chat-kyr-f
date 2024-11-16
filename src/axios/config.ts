import axios from 'axios';
import { store } from '@store/index';
import { setAccessToken, localLogout } from '@store/reducers/authSlice';
import { baseUrl } from '@utils';

axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  const state = store.getState();
  const accessToken = state.auth.accessToken;

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  };

  return config;
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newToken = error.response?.data?.accessToken;

      if (newToken) {
        store.dispatch(setAccessToken(newToken));

        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

        return axios(originalRequest);
      } else {
        store.dispatch(localLogout());
      };
    };

    return Promise.reject(error);
  }
);

export default axios;
