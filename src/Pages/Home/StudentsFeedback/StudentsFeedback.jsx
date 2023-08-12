import  { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { loadData } from "../../../Api/utils";
import SingleFeedback from "../../../Components/Home/SingleFeedback/SingleFeedback";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const StudentsFeedback = () => {
  const [Feedback, setFeedback] = useState([]);
  const {theme} = useContext(AuthContext)
  useEffect(() => {
    loadData("studentFeedback").then((data) => {
      setFeedback(data);
    });
  }, []);
  return (
    <div className=''>
      <h1 className='text-4xl pb-4 text-center font-bold'>
        Our Students Feedback
      </h1>
      <Marquee speed={100} pauseOnHover gradient gradientColor={theme==="night" && [15,23,41]}>
        <div className='grid grid-cols-6 gap-7'>
          {Feedback.map((fb) => (
            <SingleFeedback key={fb._id} fb={fb} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default StudentsFeedback;
