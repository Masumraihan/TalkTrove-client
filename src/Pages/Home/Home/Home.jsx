import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../../../Components/Home/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TalkTrove | Home</title>
      </Helmet>
      <Banner />
    </div>
  );
};

export default Home;
