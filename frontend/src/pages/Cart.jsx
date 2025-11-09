import React, { useEffect, useState } from "react";
import { getCart } from "../api/api";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCart().then(res => setCartItems(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="border-b py-2">
            {item.name} - ₹{item.price} x {item.quantity}
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
