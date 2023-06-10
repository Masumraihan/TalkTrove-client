import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Shared/Loader";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (isInstructorLoading) {
    return <Loader />;
  }

  if (isInstructor) {
    return children;
  }
  return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
