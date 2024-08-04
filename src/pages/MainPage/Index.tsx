import { Flex } from "antd";
import InputSearchContainer from "../../features/sectionMain/components/InputSearchContainer";
import SparklesText from "@components/SparkleText";
import Globe from "@components/Globe";
import SectionMain from "../../features/sectionMain/SectionMain";

const Index: React.FC = () => {
  return (
    <Flex vertical className="w-full">
      <Flex justify="center" className="m-10">
        <SparklesText className="z-50" text="Go Shopping " />
      </Flex>
      <div className="mt-64">
        <Globe className="mt-16" />
        <div className="relative w-full mt-10 h-10  flex justify-center ">
          <InputSearchContainer placeholder="Search everything you want" />
        </div>
      </div>
      <SectionMain />
    </Flex>
  );
};

export default Index;
