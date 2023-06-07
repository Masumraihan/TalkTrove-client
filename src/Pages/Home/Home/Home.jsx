import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../../../Components/Home/Banner/Banner";
import PopularClasses from "../../../Components/Home/PopularClasses/PopularClasses";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TalkTrove | Home</title>
      </Helmet>
      <Banner />
      <PopularClasses />
    </>
  );
};

export default Home;
