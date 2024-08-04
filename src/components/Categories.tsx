import React from "react";
import { Typography } from "antd";
import Marquee, { MarqueeProps } from "./Marquee";
import CategoryList from "./CategoryList";
import { BaseCategory } from "../data/CategoriesContents";

const { Title } = Typography;

export interface CategoriesProps<T extends BaseCategory> {
  categories: T[];
  title?: string;
  imageSize?: number;
  withMarquee?: boolean;
  marqueeProps?: MarqueeProps;
  renderAdditionalInfo?: (item: T) => React.ReactNode;
}

function Categories<T extends BaseCategory>({
  categories,
  title = "",
  imageSize = 192,
  renderAdditionalInfo,
}: CategoriesProps<T>) {
  return (
    <div className="mt-10 w-full flex flex-col items-center space-y-3">
      {title && (
        <Title level={3} className="text-left w-full px-4">
          {title}
        </Title>
      )}

      <CategoryList
        categories={categories}
        renderAdditionalInfo={renderAdditionalInfo}
        imageSize={imageSize}
      />
    </div>
  );
}

export default Categories;
