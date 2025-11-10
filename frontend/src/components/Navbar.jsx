import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        FlexiMartX
      </Link>

      <div className="space-x-4">
        <Link to="/"
        className="hover:text-gray-200">
        Home</Link>
        <Link to="/products" className="hover:text-gray-200">
          Products
        </Link>
        <Link to="/cart" className="hover:text-gray-200">
          Cart
        </Link>
      </div>
    </nav>
  );
}
