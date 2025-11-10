import { useState } from "react";
import { useLocation } from "react-router-dom";
import { makePayment } from "../services/paymentService";

export default function Payment() {
  const location = useLocation();
  const { orderId, amount } = location.state || {};
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  if (!orderId) {
    return <p className="text-center mt-10 text-lg text-gray-600">No order found.</p>;
  }

  const handlePayment = () => {
    setLoading(true);
    // Example: paymentMethod="UPI", you can make it dynamic later
    makePayment(orderId,1, amount, "UPI")
      .then((res) => {
        setStatus(res.status || "Success");
        setLoading(false);
        alert(`Payment ${res.status || "Success"}!`);
      })
      .catch((err) => {
        console.error("Payment error:", err);
        setStatus("Failed");
        setLoading(false);
        alert("Payment Failed. Try again.");
      });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center border rounded shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>
      <p className="text-gray-700 mb-2">Order ID: <span className="font-semibold">{orderId}</span></p>
      <p className="text-gray-700 mb-6">Total Amount: <span className="font-semibold">${amount}</span></p>
      
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold transition-colors duration-200 ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Processing Payment..." : "Pay Now"}
      </button>

      {status && (
        <p className={`mt-4 font-medium ${
          status === "Success" ? "text-green-600" : "text-red-600"
        }`}>
          Payment Status: {status}
        </p>
      )}
    </div>
  );
}
