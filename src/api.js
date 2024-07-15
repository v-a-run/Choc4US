import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const registerUser = (userData) => API.post("/users/register", userData);
export const loginUser = (userData) => API.post("/users/login", userData);

export const addChocolate = (chocolateData) =>
  API.post("/chocolates", chocolateData);
export const getChocolates = () => API.get("/chocolates");

export const createOrder = (orderData) => API.post("/orders", orderData);
export const getOrder = () => API.get("/orders");
