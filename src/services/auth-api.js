import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if(token) {
      return authInstance.defaults.headers.authorization = `Bearer ${token}`;
  }
  authInstance.defaults.headers.authorization = "";
}
export const signup = async data => {
  const { data: result } = await authInstance.post('/users/signup', data);
  setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await authInstance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};
export const logout = async() => {
  const { data } = await authInstance.post('/users/logout');
  setToken();
  return data;
}
export default authInstance;
