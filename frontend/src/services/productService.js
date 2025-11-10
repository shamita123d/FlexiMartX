import axios from "axios";

const BASE_URL = "http://localhost:8081/products"; // Product service endpoint

export const getProducts = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // return empty array if API fails
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null; // return null if not found
  }
};
