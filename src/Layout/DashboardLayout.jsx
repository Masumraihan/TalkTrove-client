import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Container from "../Components/Shared/Container";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
        <ul className='menu menu-lg rounded-box'>
          <Link to='/'>
            <li>
              <span>Home</span>
            </li>
          </Link>
          <li>
            <a>My Selected Classes</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </Drawer>
      <button className={`${isOpen && "hidden"}`} onClick={toggleDrawer}>
        <Container>
          <div className='p-2 hover:bg-base-300 m-2 rounded-lg'>
            <BiMenuAltLeft size={32} />
          </div>
          <Outlet />
        </Container>
      </button>
    </>
  );
};
export default DashboardLayout;
