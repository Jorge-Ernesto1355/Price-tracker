import React from "react";
import { FilterOutlined } from "@ant-design/icons";
import { Collapse, Flex } from "antd";
import Typography from "antd/es/typography";
import FiltredByBand from "./components/FiltredByBand";
import FiltredByCategories from "./components/FiltredByCategories";
import FiltredByState from "./components/FiltredByState";
import FiltredByPrice from "./components/FiltredByPrice";

const { Title } = Typography;
const { Panel } = Collapse;

const FiltredBy: React.FC = () => {
  return (
    <div className="rounded-md w-10/12 border p-4">
      <Title level={4}>
        <FilterOutlined /> Filtred By
      </Title>

      <Flex vertical gap={5}>
        <FiltredByBand />

        <FiltredByCategories />

        <FiltredByState />

        <FiltredByPrice />
      </Flex>
    </div>
  );
};

export default FiltredBy;
