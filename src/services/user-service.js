import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/auth/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const get = id => {
  return axios.get(API_URL +`update/${id}`);
};

const update = (id, data) => {
  return axios.put(API_URL + `update/${id}`, data);
};
export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  update,
  get,
};