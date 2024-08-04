import { Flex, Tag, Typography } from "antd";
import React from "react";
interface Category {
  category: string;
}

const { Title, Text } = Typography;

const FiltredByCategories = () => {
  const filtredByCategories: Category[] = [
    { category: "Monitor" },
    { category: "Mouse" },
    { category: "Teclado" },
    { category: "Auriculares" },
  ];

  return (
    <Flex vertical gap="small">
      <Title level={5}>Sub Category</Title>
      {filtredByCategories.map(({ category }) => (
        <Flex key={category} align="center" gap={4} className="cursor-pointer">
          <Text className="hover:text-blue-500 hover:border-b-2 hover:border-b-blue-300">
            {category}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default FiltredByCategories;
