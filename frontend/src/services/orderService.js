import axios from "axios";

const ORDER_API = "http://localhost:8083/orders"; // Base URL for order service

/**
 * Place an order for a given userId
 * @param {number} userId
 * @returns {Promise<Object>} order data
 */
export const placeOrder = async (userId) => {
  try {
    const res = await axios.post(`${ORDER_API}/place?userId=${userId}`);
    return res.data;
  } catch (error) {
    console.error("Error placing order:", error);
    throw error;
  }
};

/**
 * Get details of a specific order by orderId
 * @param {number} orderId
 * @returns {Promise<Object>} order details
 */
export const getOrder = async (orderId) => {
  try {
    const res = await axios.get(`${ORDER_API}/${orderId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};
