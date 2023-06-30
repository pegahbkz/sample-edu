import axios from "axios";
import { withCookies, Cookies } from 'react-cookie';

const API_URL = process.env.REACT_APP_API_URL;
const cookies = new Cookies('auth');

const login = (username, password) => {
  return axios
    .post(API_URL + "/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
    const token = cookies.get('auth')
  return token;
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
};

export default AuthService;