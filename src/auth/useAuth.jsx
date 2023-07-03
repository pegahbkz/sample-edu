import axios from "axios";
import { withCookies, Cookies } from 'react-cookie';
import jwt from 'jwt-decode'

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

const getRole = () => {
  const token = cookies.get('auth')
  const tokenDecoded = jwt(token);
  var role = 'unknown'
  if (tokenDecoded && tokenDecoded.role) {
      role = tokenDecoded.role
  } 

  return role
}

const AuthService = {
  login,
  logout,
  getCurrentUser,
  getRole
};

export default AuthService;