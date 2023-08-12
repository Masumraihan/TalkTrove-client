import { useContext } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import UserMenu from "./UserMenu";
import { BiMenuAltLeft } from "react-icons/bi";
import { Bounce } from "react-awesome-reveal";
import EditModal from "./EditModal";
import { useState } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const NavBar = () => {
  const { user, setTheme, profileInfo } = useContext(AuthContext);
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const navItems = <>
    <li>
      <ActiveLink to='/'>
        <span>Home</span>
      </ActiveLink>
    </li>
    <li>
      <ActiveLink to='/allInstructors'>
        <span>Instructors</span>
      </ActiveLink>
    </li>
    <li>
      <ActiveLink to='/allClasses'>
        <span>Classes</span>
      </ActiveLink>
    </li>
    {user && (
      <li>
        <ActiveLink to='/dashboard'>
          <span>Dashboard</span>
        </ActiveLink>
      </li>
    )}
  </>

  return (
    <div className='fixed w-full bg-base-100 z-10'>
      <Container>
        <div className='navbar bg-base-100 '>
          <div className='navbar-start'>
            <div className='dropdown block lg:hidden'>
              <label tabIndex={0} className='btn btn-ghost btn-square'>
                <BiMenuAltLeft color='' size={32} />
              </label>
              <ul
                tabIndex={0}
                className='menu menu-lg dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
              >
                {navItems}
              </ul>
            </div>
            <Link to='/' className='btn btn-ghost normal-case text-xl'>
              <Bounce>TalkTrove</Bounce>
            </Link>
          </div>
          <div className="navbar-start hidden lg:block">
            <ul className="flex font-semibold font-[neueSwift] gap-x-5 text-lg justify-center w-full">
              {navItems}
            </ul>
          </div>

          <div className='navbar-end'>
            <div className='flex w-full justify-end pr-5'>
              <label className='swap swap-rotate'>
                <input type='checkbox' />
                {/* sun icon */}
                <svg
                  onClick={() => setTheme("night")}
                  className='swap-on fill-current w-10 h-10'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
                </svg>
                {/* moon icon */}
                <svg
                  onClick={() => setTheme("light")}
                  className='swap-off fill-current w-10 h-10'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
                </svg>
              </label>
            </div>
            {user ? (
              <>
                <UserMenu openModal={openModal} user={profileInfo} />
              </>
            ) : (
              <Link to='/login'>
                <button className='btn btn-ghost'>Login</button>
              </Link>
            )}
          </div>
        </div>
      </Container>
      <EditModal closeModal={closeModal} isOpen={isOpen} profileInfo={profileInfo} />
    </div>
  );
};

export default NavBar;
