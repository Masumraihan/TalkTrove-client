import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>error page</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;
