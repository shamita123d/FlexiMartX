import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";

export default function ProductDetails() {
  const { id } = useParams(); // MongoDB string id
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading product details...</p>;
  if (!product) return <p className="text-center mt-10 text-red-500">Product not found.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      {product.description && <p className="text-gray-700 mb-4">{product.description}</p>}
      <p className="text-xl font-semibold mb-6">₹ {product.price}</p>

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
        onClick={() => alert("Add to cart functionality coming soon!")}
      >
        Add to Cart
      </button>
    </div>
  );
}
