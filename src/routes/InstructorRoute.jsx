import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Shared/Loader";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({children}) => {
  const [isInstructor,isInstructorLoading] = useInstructor();
  console.log(isInstructor);
  const location = useLocation();

  if (isInstructorLoading) {
    return <Loader />;
  }

  if (isInstructor) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};


export default InstructorRoute;
