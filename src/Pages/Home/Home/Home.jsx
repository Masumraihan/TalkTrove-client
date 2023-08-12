import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import StudentsFeedback from "../StudentsFeedback/StudentsFeedback";
import HeroSection from "../../../Components/Home/HeroSection/HeroSection";

const Home = () => {
  return (
    <div className="space-y-24">
      <Helmet>
        <title>TalkTrove | Home</title>
      </Helmet>
      <div className="">
        <HeroSection />
      </div>
      <PopularClasses />
      <PopularInstructors />
      <StudentsFeedback />
    </div>
  );
};

export default Home;
