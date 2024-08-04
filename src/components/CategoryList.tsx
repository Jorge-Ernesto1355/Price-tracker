import { List, Typography } from "antd";

import { Link } from "react-router-dom";
import { getGridSettings } from "../utilities/getGridSettings";
import { BaseCategory } from "../data/CategoriesContents";
import Marquee from "./Marquee";

const { Title } = Typography;

interface CategoryListProps<T extends BaseCategory> {
  categories: T[];
  imageSize?: number;
  renderAdditionalInfo?: (item: T) => React.ReactNode;
}

function CategoryList<T extends BaseCategory>({
  categories = [],
  imageSize = 192,
  renderAdditionalInfo,
}: CategoryListProps<T>) {
  const { gutter, column } = getGridSettings(categories.length);
  return (
    <List
      grid={{
        gutter: gutter,
        column: column,
      }}
      className="w-full px-4"
      dataSource={categories}
      renderItem={(category) => (
        <List.Item>
          <Link to={category.link}>
            <div className="flex flex-col items-center space-y-3 cursor-pointer rounded-md">
              <div
                className="overflow-hidden rounded-md"
                style={{
                  width: imageSize,
                  height: imageSize,
                }}
              >
                <img
                  className="object-cover w-full h-full transition-transform duration-300 rounded-md hover:scale-110"
                  src={category.imageUrl}
                  alt={category.alt}
                />
              </div>
              <Title level={5} className="text-center">
                {category.productName}
              </Title>
              {renderAdditionalInfo && renderAdditionalInfo(category)}
            </div>
          </Link>
        </List.Item>
      )}
    />
  );
}

export default CategoryList;
