import { useContext, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Container from "../Components/Shared/Container";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const DashboardLayout = () => {
  const { role, theme } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div data-theme={theme}>
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
          <ul onClick={toggleDrawer} className='menu menu-lg rounded-box'>
            <Link to='/'>
              <li>
                <span>Home</span>
              </li>
            </Link>
            <Link to='/dashboard/mySelectedClasses'>
              <li>
                <span>Selected Classes</span>
              </li>
            </Link>
            <Link to='/dashboard/myEnrolledClasses'>
              <li>
                <span> Enrolled Classes</span>
              </li>
            </Link>
            <Link to='/dashboard/paymentHistory'>
              <li>
                <span>Payment History</span>
              </li>
            </Link>
          </ul>
        )}
        {role === "instructor" && (
          <ul onClick={toggleDrawer} className='menu menu-lg rounded-box'>
            <Link to='/'>
              <li>
                <span>Home</span>
              </li>
            </Link>
            <Link to='/dashboard/addClass'>
              <li>
                <span>Add a Class</span>
              </li>
            </Link>
            <Link to='/dashboard/myClasses'>
              <li>
                <span>My Classes</span>
              </li>
            </Link>
          </ul>
        )}
        {role === "admin" && (
          <ul onClick={toggleDrawer} className='menu menu-lg rounded-box'>
            <Link to='/'>
              <li>
                <span>Home</span>
              </li>
            </Link>
            <Link to='/dashboard/manageClasses'>
              <li>
                <span>Manage Classes</span>
              </li>
            </Link>
            <Link to='/dashboard/manageUsers'>
              <li>
                <span>Manage Users</span>
              </li>
            </Link>
          </ul>
        )}
      </Drawer>
      <Container>
        <button onClick={toggleDrawer}>
          <div className='p-2 hover:bg-base-300 m-2 flex items-center gap-x-2 rounded-lg'>
            <span className='text-xl font-semibold'>Menu</span>
            <BiMenuAltLeft size={32} />
          </div>
        </button>
        <div className='p-10'>
          <Outlet />
        </div>
      </Container>
    </div>
  );
};
export default DashboardLayout;
