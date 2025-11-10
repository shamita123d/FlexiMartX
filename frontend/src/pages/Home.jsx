import { useEffect, useState } from "react";
import { addToCart } from "../services/cartService";
import { getProducts } from "../services/productService";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (productId) => {
    addToCart(1, productId, 1) // userId=1, qty=1
      .then(() => alert("Added to cart!"))
      .catch((err) => {
        console.error("Add to cart failed:", err);
        alert("Failed to add to cart.");
      });
  };

  if (loading)
    return <p className="text-center mt-20 text-gray-600 text-xl">Loading products...</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Welcome to FlexiMartX
      </h1>
      <p className="text-center text-gray-600 mb-10 text-lg">
        Your one-stop e-commerce platform. Explore our products and shop easily!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <p className="text-gray-500 text-sm mb-4">{product.description}</p>
            </div>
            <button
              onClick={() => handleAddToCart(product.id)}
              className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
