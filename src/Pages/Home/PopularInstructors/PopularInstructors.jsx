import React, { useEffect, useState } from "react";
import SingleInstructors from "../../../Components/Home/SingleInstructors/SingleInstructors";
import Container from "../../../Components/Shared/Container";
import { loadData } from "../../../Api/utils";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    loadData("instructors?top=6").then((data) => {
      setInstructors(data);
    });
  }, []);
  return (
    <Container>
      <h1 className='text-4xl pb-4 text-center font-bold'>
        Our Popular Instructors
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7'>
        {instructors.map((instructor) => (
          <SingleInstructors key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </Container>
  );
};

export default PopularInstructors;
