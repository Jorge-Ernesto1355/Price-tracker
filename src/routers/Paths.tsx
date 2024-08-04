interface PathsImpl {
  CATEGORY: string;
  MAIN: string;
}

export const PATHS: PathsImpl = {
  CATEGORY: "/category/:categoryType",
  MAIN: "/",
} as const;

export const SubPaths = {
  ELECTRONICS: "/category/electronics",
};
