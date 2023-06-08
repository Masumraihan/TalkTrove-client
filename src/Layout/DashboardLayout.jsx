import { Menu, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      {/*<div>
      <div className='drawer lg:drawer-open'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content relative'>
          
          <label htmlFor='my-drawer' className='btn absolute lg:hidden z-10 left-[263px] btn-primary drawer-button'>
            <BiMenuAltLeft size={24}/>
          </label>
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
           
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>*/}

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='border'
      >
        <button onClick={toggleDrawer}>
          <BiMenuAltLeft size={24} />
        </button>
        <ul className='menu rounded-box'>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </Drawer>
      <button className={`${isOpen && "hidden"}`} onClick={toggleDrawer}>
        <BiMenuAltLeft size={24} />
      </button>
    </>
  );
};
export default DashboardLayout;
