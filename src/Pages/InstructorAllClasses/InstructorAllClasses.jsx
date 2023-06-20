import { useEffect } from "react";
import { getInstructorClasses } from "../../Api/utils";
import useScrollTop from "../../hooks/useScrollTop";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ClassCard from "../../Components/AllClasses/ClassCard";

const InstructorAllClasses = () => {
  useScrollTop();
  const [classes, setClasses] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getInstructorClasses(id).then((data) => {
      setClasses(data?.result);
    });
  }, [id]);
  return (
    <div>
      <h1 className='text-4xl pb-4 text-center font-bold'>
       All Classes By <span>{classes[0]?.name}</span>
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
        {classes.map((classDetails) => (
          <ClassCard key={classDetails._id} classDetails={classDetails} />
        ))}
      </div>
    </div>
  );
};

export default InstructorAllClasses;
