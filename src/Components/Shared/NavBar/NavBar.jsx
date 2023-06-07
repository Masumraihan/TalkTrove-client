import React, { useContext } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import UserMenu from "./UserMenu";

const NavBar = () => {
  //Todo get user in AuthProvider
  const { user } = useContext(AuthContext);

  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <Container>
        <div className='navbar bg-base-100'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-ghost btn-circle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h7'
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Instructors</a>
                </li>
                <li>
                  <a>Classes</a>
                </li>
                {user && (
                  <li>
                    <a>Dashboard</a>
                  </li>
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
