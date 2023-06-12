import { Helmet } from "react-helmet-async";
import Banner from "../../../Components/Home/Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import StudentsFeedback from "../StudentsFeedback/StudentsFeedback";

const Home = () => {
  console.log(localStorage.getItem("theme"));
  return (
    <div data-theme={localStorage.getItem("theme")}>
      <Helmet>
        <title>TalkTrove | Home</title>
      </Helmet>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <StudentsFeedback />
    </div>
  );
};

export default Home;
