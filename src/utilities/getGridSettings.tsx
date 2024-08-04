import { Grid } from "antd";

const { useBreakpoint } = Grid;
export  const getGridSettings = (itemCount: number) => {

    const screens = useBreakpoint();

    if (screens.xxl) {
      return { gutter: 20, column: itemCount <= 3 ? itemCount : 5 };
    }
    if (screens.xl) {
      return { gutter: 48, column: itemCount <= 4 ? itemCount : 4 };
    }
    if (screens.lg) {
      return { gutter: 36, column: itemCount <= 3 ? itemCount : 3 };
    }
    if (screens.md) {
      return { gutter: 24, column: itemCount <= 2 ? itemCount : 2};
    }
    if (screens.sm) {
      return { gutter: 16, column: itemCount === 1 ? 1 : 2 };
    }
    return { gutter: 8, column: 1 };
  };
