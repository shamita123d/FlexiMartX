import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../services/orderService";

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    setLoading(true);
    placeOrder(1) // hardcoded userId=1 for now
      .then((order) => {
        setLoading(false);
        // Show confirmation
        alert(`✅ Order Placed! Order ID: ${order.id}`);
        // Navigate to payment page with order details
        navigate("/payment", { state: { orderId: order.id, amount: order.totalAmount } });
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error placing order:", err);
        alert("❌ Failed to place order. Please try again.");
      });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      <p className="text-gray-600 mb-6 text-center">
        Review your order and proceed to payment.
      </p>
      <div className="flex justify-center">
        <button
          className={`bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-semibold transition-colors duration-200 ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          onClick={handlePlaceOrder}
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}
