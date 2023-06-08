import { useContext, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Container from "../Components/Shared/Container";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const DashboardLayout = () => {
  const { role } = useContext(AuthContext);
  console.log("role", role);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='border'
      >
        <button className='absolute z-10 right-0 top-3' onClick={toggleDrawer}>
          <div className='p-2 hover:bg-base-300 mr-2 rounded-lg'>
            <BiMenuAltLeft size={32} />
          </div>
        </button>
        {role === "student" && (
          <ul className='menu menu-lg rounded-box'>
            <Link to='/'>
              <li>
                <span>Home</span>
              </li>
            </Link>
            <Link to='/dashboard'>
              <li>
                <span>My Selected Classes</span>
              </li>
            </Link>
            <Link to='/dashboard/myEnrolledClasses'>
              <li>
                <span>My Enrolled Classes</span>
              </li>
            </Link>
          </ul>
        )}
        {role === "instructor" && (
          <ul className='menu menu-lg rounded-box'>
            <Link to='/'>
              <li>
                <span>Home</span>
              </li>
            </Link>
            <Link to='/dashboard'>
              <li>
                <span>Add a Class</span>
              </li>
            </Link>
          </ul>
        )}
      </Drawer>
      <Container>
        <button onClick={toggleDrawer}>
          <div className='p-2 hover:bg-base-300 m-2 rounded-lg'>
            <BiMenuAltLeft size={32} />
          </div>
        </button>
        <div className='ml-40 p-10'>
          <Outlet />
        </div>
      </Container>
    </>
  );
};
export default DashboardLayout;
