// router.ts
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";
import { PATHS } from "./Paths";
import Layout from "../layout/Layout";
import createRoute from "./createRoute";
import ErrorCategoryPage from "../pages/categoryPage/components/ErrorCategoryPage";

const App = lazy(() => import("../App"));
const CategoryPage = lazy(() => import("../pages/categoryPage/CategoryPage"));
const Productpage = lazy(() => import("../pages/ProductPage/ProductPage"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      createRoute({ path: PATHS.MAIN, Component: App }),
      createRoute({
        path: PATHS.CATEGORY,
        Component: CategoryPage,
        Error: <ErrorCategoryPage />,
      }),
    ],
  },
  {
    path: "/shopping/product/:productId",
    element: <Productpage />,
  },
];

export const router = createBrowserRouter(routes);
