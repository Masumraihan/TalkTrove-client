import React from "react";
import { Outlet } from "react-router-dom";import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer";
;

const Main = () => {
  return (
    <>
      <NavBar />
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
