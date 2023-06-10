import  { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { loadData } from "../../../Api/utils";
import SingleFeedback from "../../../Components/Home/SingleFeedback/SingleFeedback";

const StudentsFeedback = () => {
  const [Feedback, setFeedback] = useState([]);
  useEffect(() => {
    loadData("studentFeedback").then((data) => {
      setFeedback(data);
    });
  }, []);
  return (
    <div className='py-20'>
      <h1 className='text-4xl pb-4 text-center font-bold'>
        Our Students Feedback
      </h1>
      <Marquee speed={100} pauseOnHover gradient>
        <div className='grid grid-cols-3 gap-7'>
          {Feedback.map((fb) => (
            <SingleFeedback key={fb._id} fb={fb} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default StudentsFeedback;
