import React, { useState } from "react";
import { Card, Rate, Tag, Button, Tooltip, Image } from "antd";
import { ShoppingCartOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;

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

const ProductOverView = ({ productId }: { productId: string }) => {
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
    <Card
      hoverable
      cover={
        <div>
          <Image
            alt={product.name}
            src={product.images[currentImageIndex]}
            preview={false}
          />
          <div className="flex justify-center mt-2">
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                className={`w-12 h-12 object-cover mx-1 cursor-pointer ${
                  index === currentImageIndex ? "border-2 border-blue-500" : ""
                }`}
                preview={false}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      }
      actions={[
        <Tooltip title="Add to Cart">
          <Button icon={<ShoppingCartOutlined />}>Add to Cart</Button>
        </Tooltip>,
        <Tooltip title="Compare Prices">
          <Button>Compare</Button>
        </Tooltip>,
        <Tooltip title="View Details">
          <Button icon={<InfoCircleOutlined />} href={`/product/${product.id}`}>
            Details
          </Button>
        </Tooltip>,
      ]}
    >
      <Meta
        title={<span className="text-lg font-bold">{product.name}</span>}
        description={
          <>
            <p className="text-gray-500">{product.brand}</p>
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
              <Rate disabled defaultValue={product.rating} />
              <span className="ml-2 text-gray-600">
                ({product.reviewCount} reviews)
              </span>
            </div>
            <p>{product.isUsed ? `Used - ${product.condition}` : "New"}</p>
            <p>Sold by: {product.storeName}</p>
            <p>
              Store rating: <Rate disabled defaultValue={product.storeRating} />
            </p>
            <p>Shipping: {product.shippingTime}</p>
            <p>Availability: {product.availability}</p>
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
              <div className="flex flex-wrap mt-2">
                {product.tags.map((tag, index) => (
                  <Tag key={index} color="blue">
                    {tag}
                  </Tag>
                ))}
              </div>
            )}
          </>
        }
      />
    </Card>
  );
};

export default ProductOverView;
