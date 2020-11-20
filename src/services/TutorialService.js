import http from "../components/http-common";




const get = id => {
  return http.get(`/update/${id}`);
};



const update = (id, data) => {
  return http.put(`/update/${id}`, data);
};

const getInfo = id => {
  return http.get(`/staff/${id}`);
};

const updateStaff = (id, data) => {
  return http.put(`/staffUpdate/${id}`,data);
};



export default {
  get, 
  update,
  getInfo,
  updateStaff,
};