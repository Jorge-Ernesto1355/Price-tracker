import { Col, Row } from "antd";
import OptionsBuys from "../../features/ProductPage/OptionsBuys/OptionsBuys";
import PricePrediction from "../../features/ProductPage/PricePrediction/PricePrediction";
import ProductOverView from "../../features/ProductPage/productOverView/ProductOverView";
import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <main>
      <Row className="w-full h-full">
        <Col span={12} className="h-full">
          <ProductOverView productId={productId || ""} />
          <OptionsBuys />
        </Col>
        <Col span={12}>
          <PricePrediction />
        </Col>
      </Row>
    </main>
  );
};

export default ProductPage;
