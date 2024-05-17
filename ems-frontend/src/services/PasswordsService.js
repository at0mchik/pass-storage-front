import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/pass';

export const listPass = () => axios.get(REST_API_BASE_URL + "/all");

export const createPass = (password) => axios.post(REST_API_BASE_URL + "/new", password);

export const getPass = (id) => axios.get(REST_API_BASE_URL + "/get/id/" + id);

export const deletePass = (id) => axios.delete(REST_API_BASE_URL + "/delete/id/" + id);

export const updatePass = (id, password) => axios.put(REST_API_BASE_URL + "/update/id/" + id, password);