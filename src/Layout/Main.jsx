import "react";
import { Outlet } from "react-router-dom";import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Main = () => {
  const {theme} = useContext(AuthContext)
  return (
    <div data-theme={theme}>
      <NavBar />
      <div className='py-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
