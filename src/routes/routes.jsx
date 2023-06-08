import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";

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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard",
        element: <MySelectedClasses />,
      },
      {
        path: "/dashboard/mySelectedClasses",
        element: <MySelectedClasses />,
      },
      {
        path: "/dashboard/myEnrolledClasses",
        element: <MyEnrolledClasses />,
      },
      {
        path: "/dashboard/addClass",
        element: <AddClass />,
      },
      {
        path: "/dashboard/myClasses",
        element: <MyClasses />,
      },
    ],
  },
]);
export default router;
