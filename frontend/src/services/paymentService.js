import axios from "axios";

const PAYMENT_API = "http://localhost:8084/payments";

/**
 * Make payment for an order
 * @param {number} id - ID of the order
 * @param {number} userId - ID of the user
 * @param {number} amount - Payment amount
 * @param {string} method - Payment method (e.g., "card", "upi")
 * @returns {Promise<Object>} - Payment response
 */
export const makePayment = async (orderId, userId, amount, method = "card") => {
  try {
    const response = await axios.post(
  `${PAYMENT_API}/process?orderId=${orderId}&userId=1&amount=${amount}&method=${method}`
);

    return response.data;
  } catch (error) {
    console.error("Payment failed:", error);
    throw new Error(
      error.response?.data?.message || "Payment processing failed"
    );
  }
};
