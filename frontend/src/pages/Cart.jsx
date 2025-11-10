import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserCart, removeCartItem, clearCart } from "../services/cartService";

export default function Cart({ userId = 1 }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCart = () => {
    setLoading(true);
    getUserCart(userId)
      .then((data) => setCartItems(data))
      .catch((err) => console.error("Error fetching cart:", err))
      .finally(() => setLoading(false));
  };

  const handleRemove = (cartItemId) => {
    removeCartItem(cartItemId)
      .then(() => fetchCart())
      .catch((err) => console.error("Error removing item:", err));
  };

  const handleClearCart = () => {
    clearCart(userId)
      .then(() => fetchCart())
      .catch((err) => console.error("Error clearing cart:", err));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    fetchCart();
  }, [userId]);

  if (loading)
    return (
      <p className="text-center mt-20 text-lg font-medium text-gray-600 animate-pulse">
        Loading cart...
      </p>
    );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between p-5 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <div className="flex flex-col gap-3">
                  <span className="font-semibold text-lg text-gray-900">
                    {item.productName || item.name}
                  </span>
                  <span className="text-gray-600">
                    Price: ${item.price} × {item.quantity}
                  </span>
                  <span className="text-gray-500 text-sm">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <button
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>

            <button
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
