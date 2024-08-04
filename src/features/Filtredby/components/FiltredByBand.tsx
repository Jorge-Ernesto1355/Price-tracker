import { Flex, Tag, Typography } from "antd";

interface Brand {
  brand: string;
}

const { Title, Text } = Typography;

const FiltredByBand = () => {
  const filtredByBrand: Brand[] = [
    { brand: "Logitech" },
    { brand: "Samsung" },
    { brand: "Xiaomi" },
    { brand: "Tesla" },
  ];

  return (
    <Flex gap="small" vertical>
      <Title level={5}>Brand</Title>
      {filtredByBrand.map(({ brand }) => (
        <Flex key={brand} align="center" gap={4} className="cursor-pointer ">
          <Text className="hover:text-blue-500 hover:border-b-2 hover:border-b-blue-300">
            {brand}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default FiltredByBand;
