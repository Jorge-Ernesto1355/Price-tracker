import { Flex, Switch, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;
const FiltredByState = () => {
  return (
    <div>
      <Title level={5}>Condition</Title>
      <Flex vertical gap="small" className="cursor-pointer ">
        <Text>Nuevo</Text>
        <Text>Usado</Text>
        <Text>Reacondicionado</Text>
      </Flex>
    </div>
  );
};

export default FiltredByState;
