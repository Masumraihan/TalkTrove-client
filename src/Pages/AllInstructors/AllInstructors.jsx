import { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import { loadData } from "../../Api/utils";
import SingleInstructors from "../../Components/Home/SingleInstructors/SingleInstructors";

const AllInstructors = () => {
  const [allInstructors, setAllInstructors] = useState([]);
  useEffect(() => {
    loadData("allInstructors").then((data) => {
      setAllInstructors(data);
    });
  }, []);
  return (
    <Container>
      <h1 className='text-4xl pb-4 text-center font-bold'>
        Our All Instructors
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7'>
        {allInstructors.map((instructor) => (
          <SingleInstructors key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </Container>
  );
};

export default AllInstructors;
