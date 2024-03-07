import { createBrowserRouter } from "react-router-dom";

import { Main } from "./pages";

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
    ],
  },
]);

export { router };
