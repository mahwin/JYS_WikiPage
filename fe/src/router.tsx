import { createBrowserRouter } from "react-router-dom";

import { Main, PostDetail } from "./pages";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "posts/:id",
        element: <PostDetail />,
      },
    ],
  },
]);

export { router };
