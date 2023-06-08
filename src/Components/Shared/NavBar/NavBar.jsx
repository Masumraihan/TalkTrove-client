import React, { useContext } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import UserMenu from "./UserMenu";
import { BiMenuAltLeft } from "react-icons/bi";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <Container>
        <div className='navbar bg-base-100'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-ghost btn-square'>
              <BiMenuAltLeft size={32} />
              </label>
              <ul
                tabIndex={0}
                className='menu menu-lg dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
              >
                <Link to='/'>
                  <li>
                    <span>Home</span>
                  </li>
                </Link>
                <Link to='/allInstructors'>
                  <li>
                    <span>Instructors</span>
                  </li>
                </Link>
                <Link to='/allClasses'>
                  <li>
                    <span>Classes</span>
                  </li>
                </Link>
                {user && (
                  <Link to='/dashboard'>
                    <li>
                      <span>Dashboard</span>
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          </div>
          <div className='navbar-center'>
            <Link to='/' className='btn btn-ghost normal-case text-xl'>
              TalkTrove
            </Link>
          </div>
          <div className='navbar-end'>
            {user ? (
              // TODO add user name using tooltip

              <>
                <UserMenu />
              </>
            ) : (
              <Link to='/login'>
                <button className='btn btn-ghost'>Login</button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
