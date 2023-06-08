import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../../../Components/Home/Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import StudentsFeedback from "../StudentsFeedback/StudentsFeedback";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TalkTrove | Home</title>
      </Helmet>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <StudentsFeedback/>
    </>
  );
};

export default Home;
