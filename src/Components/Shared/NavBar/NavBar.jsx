import { useContext } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import UserMenu from "./UserMenu";
import { BiMenuAltLeft } from "react-icons/bi";
import { motion } from "framer-motion";
import { Bounce } from "react-awesome-reveal";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <Container>
        <div className='navbar bg-base-100'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%",
                }}
              >
                <label tabIndex={0} className='btn btn-ghost btn-square'>
                  <BiMenuAltLeft color='' size={32} />
                </label>
              </motion.div>
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
              <Bounce>TalkTrove</Bounce>
            </Link>
          </div>
          <div className='navbar-end'>
            {user ? (
              <>
                <UserMenu user={user} />
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
