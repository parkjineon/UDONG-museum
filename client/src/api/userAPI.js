import axios from "axios";

const LOGIN = async (body) => {
  try {
    const response = await axios.post("/api/users/login", body);
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
    const response = await axios.get("/api/users/logout");
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
    const response = await axios.post("/api/users/register", body);
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
const FOLLOW = async (uid) => {
  try {
    const response = axios.post(`/api/users/${uid}/follow`);
    return response;
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      message: err.message,
    };
  }
};
const UNFOLLOW = async (uid) => {
  try {
    const response = axios.post(`/api/users/${uid}/unfollow`);
    return response;
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      message: err.message,
    };
  }
};
const GET_ME = async () => {
  try {
    const response = axios.get("/api/users/mine/show");
    return response;
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      message: err.message,
    };
  }
};
const GET_USER = async (uid) => {
  try {
    const response = axios.get(`/api/users/${uid}`);
    return response;
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      message: err.message,
    };
  }
};

const EDIT_PROFILE = async () => {
  try {
    const response = axios.post("/api/users/mine/edit");
    return response;
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      message: err.message,
    };
  }
};

export {
  LOGIN,
  LOGOUT,
  REGISTER,
  AUTH,
  FOLLOW,
  UNFOLLOW,
  GET_ME,
  GET_USER,
  EDIT_PROFILE,
};
