import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Loader from "../Components/Shared/Loader";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (isAdminLoading) {
    return <Loader />;
  }

  if (isAdmin) {
    return children;
  }
  return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
