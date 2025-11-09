import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; // Spring Boot backend

export const fetchProducts = async () => await axios.get(`${API_BASE_URL}/products`);
export const fetchProductById = async (id) => await axios.get(`${API_BASE_URL}/products/${id}`);
export const addToCart = async (cartItem) => await axios.post(`${API_BASE_URL}/cart`, cartItem);
export const getCart = async () => await axios.get(`${API_BASE_URL}/cart`);
export const checkout = async (order) => await axios.post(`${API_BASE_URL}/orders`, order);

