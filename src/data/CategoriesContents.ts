import { SubPaths } from "../routers/Paths";

export interface BaseCategory {
  productName: string;
  imageUrl: string;
  alt: string;
  link: string;
}

export interface ExtendedCategory extends BaseCategory {
  price?: number;
  starsLength: number;
  store: { storeLogo: string; storeName: string };
}

export const CategoryTopics: BaseCategory[] = [
  {
    productName: "Electronics",
    alt: "Celular",
    link: SubPaths.ELECTRONICS,
    imageUrl:
      "https://i.ebayimg.com/thumbs/images/g/A4AAAOSwiYNmOozq/s-l640.jpg",
  },
  {
    productName: "Clothing",
    alt: "Clothes",
    link: "",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/how_20to_20start_20a_20clothing_20brand.png?v=1693935729",
  },
  {
    productName: "Health and Beauty",
    alt: "health and beauty",
    link: "",
    imageUrl:
      "https://media.istockphoto.com/id/1141698953/photo/spa-products-for-home-skin-care.jpg?s=612x612&w=0&k=20&c=HxtIt73MwCZBY0APYngv0poZCEtyDhckTuT8SxJSxPE=",
  },
  {
    productName: "Sports and Outdoors",
    alt: "Sports and Outdoors",
    link: "",
    imageUrl:
      "https://img.lovepik.com/bg/20240506/Vibrant-3D-Illustration-Pink-Background-Fitness-Equipment-with-Yellow-Metal_9758347_wh860.jpg!/fw/860",
  },
  {
    productName: "Home goods",
    alt: "Home goods",
    link: "",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2098/0315/files/Sala-1300x1200-Sala_Collen-50.jpg?v=1708525802&width=1000",
  },
];

export const CategoryTrending: BaseCategory[] = [
  {
    productName: "Electronics",
    alt: "Celular",
    link: "Electronics",
    imageUrl:
      "https://i.ebayimg.com/thumbs/images/g/A4AAAOSwiYNmOozq/s-l640.jpg",
  },
  {
    productName: "Clothing",
    alt: "Clothes",
    link: "Electronics",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/how_20to_20start_20a_20clothing_20brand.png?v=1693935729",
  },
  {
    productName: "Health and Beauty",
    alt: "health and beauty",
    link: "Electronics",
    imageUrl:
      "https://media.istockphoto.com/id/1141698953/photo/spa-products-for-home-skin-care.jpg?s=612x612&w=0&k=20&c=HxtIt73MwCZBY0APYngv0poZCEtyDhckTuT8SxJSxPE=",
  },
  {
    productName: "Sports and Outdoors",
    alt: "Sports and Outdoors",
    link: "Electronics",
    imageUrl:
      "https://img.lovepik.com/bg/20240506/Vibrant-3D-Illustration-Pink-Background-Fitness-Equipment-with-Yellow-Metal_9758347_wh860.jpg!/fw/860",
  },
  {
    productName: "Home goods",
    alt: "Home goods",
    link: "Electronics",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2098/0315/files/Sala-1300x1200-Sala_Collen-50.jpg?v=1708525802&width=1000",
  },
];
