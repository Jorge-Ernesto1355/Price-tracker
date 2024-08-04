import React from "react";
import { Flex, Typography, Tooltip, Card, Tag, Button } from "antd";
import { ShopOutlined, StarFilled } from "@ant-design/icons";
import Stars from "./Stars";
import { ExtendedCategory } from "../data/CategoriesContents";

const { Text, Title } = Typography;

const CURRENCY = "MXN";

interface AdditionalProductInfoProps {
  product: ExtendedCategory;
}

const AdditionalProductInfo: React.FC<AdditionalProductInfoProps> = ({
  product,
}) => {
  const { price, store, starsLength } = product;

  return (
    <Card
      hoverable
      className="w-full shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <Flex vertical align="stretch" className="space-y-3">
        <Flex justify="space-between" align="center">
          <Tag color="blue" icon={<StarFilled />} className="text-sm">
            {starsLength.toFixed(1)}
          </Tag>
          <Flex gap={2} align="baseline">
            <Text type="secondary" className="text-xs">
              {CURRENCY}
            </Text>
            <Tooltip title={price}>
              <Typography.Paragraph ellipsis>
                <Title level={3} className="m-0 font-bold text-blue-600">
                  {price}
                </Title>
              </Typography.Paragraph>
            </Tooltip>
          </Flex>
        </Flex>

        <Flex align="center" className="space-x-2">
          <ShopOutlined className="text-gray-500" />
          <Text type="secondary" className="text-sm">
            Store:
          </Text>
          <Tooltip title={store.storeName}>
            <img
              src={store.storeLogo}
              alt={`${store.storeName} logo`}
              className="w-6 h-6 object-contain rounded-full border border-gray-200"
            />
          </Tooltip>
          <Text className="text-sm font-medium text-gray-700">
            {store.storeName}
          </Text>
        </Flex>

        <Flex justify="space-between" align="center">
          <Stars stars={starsLength} />
          <Tooltip title="Notify if the price has changed">
            <Button size="small" type="primary">
              Track
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
    </Card>
  );
};

export default React.memo(AdditionalProductInfo);
