import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between h-full">
      <div>
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        {product.description && (
          <p className="text-gray-600 mb-4">{product.description}</p>
        )}
        <p className="font-bold text-gray-800 text-lg">₹ {product.price}</p>
      </div>
      <Link
        to={`/products/${product.id}`}
        className="mt-4 text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
      >
        View Details
      </Link>
    </div>
  );
}
