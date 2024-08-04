import LoaderCubes from "@components/loaders/LoaderCubes";
import { LazyExoticComponent, Suspense } from "react";

interface createRouteImpl {
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
  Error?: React.ReactNode;
}

const createRoute = ({ path, Component, Error }: createRouteImpl) => ({
  path,
  element: (
    <Suspense fallback={<LoaderCubes />}>
      <Component />
    </Suspense>
  ),
  errorElement: Error,
});

export default createRoute;
