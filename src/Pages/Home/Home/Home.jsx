import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import StudentsFeedback from "../StudentsFeedback/StudentsFeedback";
import HeroSection from "../../../Components/Home/HeroSection/HeroSection";
import Banner from "../../../Components/Home/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TalkTrove | Home</title>
      </Helmet>
      <div className='lg:hidden'>
        <Banner />
      </div>
      <div className="hidden lg:block">
        <HeroSection />
      </div>
      <PopularClasses />
      <PopularInstructors />
      <StudentsFeedback />
    </div>
  );
};

export default Home;
