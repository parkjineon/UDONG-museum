import axios from "axios";

const LOGIN = async (body) => {
  try {
    const response = await axios.post("/api/login", body);
    return response;
  } catch (err) {
    console.log(err);
    return {
      loginSuccess: false,
      message: err.message,
    };
  }
};
const LOGOUT = async () => {
  try {
    const response = await axios.get("http://localhost:3001/logout");
    return response;
  } catch (err) {
    console.log(err);
    return {
      logoutSuccess: false,
      message: err.message,
    };
  }
};
const REGISTER = async (body) => {
  try {
    const response = await axios.post("http://localhost:3001/register", body);
    return response;
  } catch (err) {
    console.log(err);
    return {
      registerSuccess: false,
      message: err.message,
    };
  }
};
const AUTH = async () => {
  try {
    const response = axios.get("http://localhost:3001/auth");
    return response;
  } catch (err) {
    console.log(err);
    return {
      authSuccess: false,
      message: err.message,
    };
  }
};
const FOLLOW = async (uid) => {};
const UNFOLLOW = async (uid) => {};
const GET_USER = async (uid) => {};
// const getMyself
const GET_CRNT_LOCATION = async () => {};

export {
  LOGIN,
  LOGOUT,
  REGISTER,
  AUTH,
  FOLLOW,
  UNFOLLOW,
  GET_USER,
  GET_CRNT_LOCATION,
};
