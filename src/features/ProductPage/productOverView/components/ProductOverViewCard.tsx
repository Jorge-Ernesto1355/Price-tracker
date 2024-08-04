import Stars from "@components/Stars";
import React, { useState } from "react";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  isUsed: boolean;
  condition?: string;
  storeName: string;
  storeRating: number;
  shippingTime: string;
  images: string[];
  availability: string;
  options?: string[];
  tags?: string[];
}

const ProductCard: React.FC<{ productId: string }> = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product: Product = {
    id: "1",
    name: "Smartphone XYZ",
    brand: "TechCo",
    price: 599.99,
    oldPrice: 699.99,
    rating: 4.5,
    reviewCount: 1280,
    isUsed: false,
    storeName: "ElectroStore",
    storeRating: 4.8,
    shippingTime: "2-3 business days",
    images: [
      "https://example.com/smartphone-1.jpg",
      "https://example.com/smartphone-2.jpg",
      "https://example.com/smartphone-3.jpg",
    ],
    availability: "In Stock",
    options: ["64GB", "128GB", "256GB"],
    tags: ["New", "Best Seller"],
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 bg-black bg-opacity-50">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-12 h-12 object-cover mx-1 cursor-pointer ${
                index === currentImageIndex ? "border-2 border-white" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.brand}</p>
        <div className="flex items-center mb-2">
          <span className="text-2xl font-bold mr-2">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-gray-500 line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex items-center mb-2">
          <Stars stars={5} />
          <span className="ml-2 text-gray-600">
            ({product.reviewCount} reviews)
          </span>
        </div>
        <p className="mb-2">
          {product.isUsed ? `Used - ${product.condition}` : "New"}
        </p>
        <div className="mb-2">
          <p>Sold by: {product.storeName}</p>
          <div className="flex items-center">
            <span>Store rating:</span>
            <Stars stars={5} />
          </div>
          <p>Estimated shipping: {product.shippingTime}</p>
        </div>
        <p className="mb-2">Availability: {product.availability}</p>
        {product.options && (
          <div className="mb-2">
            <p className="font-semibold">Options:</p>
            <ul className="list-disc list-inside">
              {product.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        )}
        {product.tags && (
          <div className="flex flex-wrap mb-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-1 mb-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mb-2">
          Add to Cart
        </button>
        <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition duration-300 mb-2">
          Compare Prices
        </button>
        <a
          href={`/product/${product.id}`}
          className="block text-center text-blue-500 hover:underline"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
