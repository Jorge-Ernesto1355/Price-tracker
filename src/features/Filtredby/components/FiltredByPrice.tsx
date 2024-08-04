import { Button, Flex, InputNumber, Typography } from "antd";

const { Title, Text } = Typography;

const FiltredByPrice = () => {
  return (
    <Flex vertical align="center" gap="small">
      <Title level={5}>Price</Title>
      <Text type="secondary">Choose a price according by your presupuest</Text>
      <Flex>
        <Flex gap={10}>
          <Flex vertical justify="center" align="center" gap={5}>
            <Text type="secondary">Min </Text>
            <InputNumber />
          </Flex>
          <Text type="secondary">-</Text>
          <Flex vertical justify="center" align="center" gap={5}>
            <Text type="secondary">Max</Text>
            <InputNumber />
          </Flex>
        </Flex>
      </Flex>
      <Button type="primary">Search</Button>
    </Flex>
  );
};

export default FiltredByPrice;
