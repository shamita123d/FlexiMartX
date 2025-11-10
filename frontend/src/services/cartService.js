import axios from "axios";

const CART_API = "http://localhost:8082/cart"; // Cart service base URL

// Add item to cart
export const addToCart = async (userId, productId, quantity) => {
  try {
    const res = await axios.post(`${CART_API}/add`, null, {
      params: { userId, productId, quantity },
    });
    return res.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

// Get user cart items
export const getUserCart = async (userId) => {
  try {
    const res = await axios.get(`${CART_API}/${userId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

// Remove item from cart
export const removeCartItem = async (cartItemId) => {
  try {
    const res = await axios.delete(`${CART_API}/item/${cartItemId}`);
    return res.data;
  } catch (error) {
    console.error("Error removing cart item:", error);
    throw error;
  }
};

// Clear entire cart for a user
export const clearCart = async (userId) => {
  try {
    const res = await axios.delete(`${CART_API}/clear/${userId}`);
    return res.data;
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw error;
  }
};
