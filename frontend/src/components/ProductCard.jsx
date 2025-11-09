import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-bold mt-2">₹ {product.price}</p>
      <Link to={`/products/${product.id}`} className="text-blue-600 hover:underline mt-2 block">View Details</Link>
    </div>
  );
}

export default ProductCard;
