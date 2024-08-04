import { Flex } from "antd";

import Categories from "@components/Categories";
import {
  CategoryTopics,
  CategoryTrending,
} from "./../../data/CategoriesContents";
const SectionMain = () => {
  return (
    <section>
      <Flex
        vertical
        justify="center"
        align="center"
        className="w-4/5 mt-14  m-auto"
      >
        <Categories title="Browse by category" categories={CategoryTopics} />
        <Categories title="Trending products" categories={CategoryTrending} />
      </Flex>
    </section>
  );
};

export default SectionMain;
