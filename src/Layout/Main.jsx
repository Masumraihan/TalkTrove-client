import "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  const {theme} = useContext(AuthContext)
  AOS.init({
    duration:800
  })
  return (
    <div data-theme={theme} className="font-[neueSwift]" >
      <NavBar />
      <div className='py-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
