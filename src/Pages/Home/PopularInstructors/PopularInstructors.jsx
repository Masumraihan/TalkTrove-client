import React, { useEffect, useState } from "react";
import SingleInstructors from "../../../Components/Home/SingleInstructors/SingleInstructors";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/instructors`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructors(data);
      });
  }, []);
  return (
    <div>
      <h1 className='text-4xl pb-4 text-center font-bold'>
        Our Popular Instructors
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7'>
        {instructors.map((instructor) => (
          <SingleInstructors key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
