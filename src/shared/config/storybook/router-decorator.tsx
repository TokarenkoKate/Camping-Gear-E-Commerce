import { INDEX_ROUTE_PATH } from "@/shared/const/router";
import { StoryFn } from "@storybook/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

export const RouterDecorator = (Story: StoryFn) => {
  const router = createMemoryRouter([{ path: "/", element: <Story /> }], {
    initialEntries: [INDEX_ROUTE_PATH],
  });

  return <RouterProvider router={router} />;
};
