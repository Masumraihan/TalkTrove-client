import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import DashboardLayout from "../Layout/DashboardLayout";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/allInstructors",
        element: <AllInstructors />,
      },
      {
        path: "/allClasses",
        element: <AllClasses />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);
export default router;
