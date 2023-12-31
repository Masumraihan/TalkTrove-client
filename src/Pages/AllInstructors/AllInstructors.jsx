import { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import { loadData } from "../../Api/utils";
import InstructorCard from "./InstructorCard";
import { Helmet } from "react-helmet-async";
import useScrollTop from "../../hooks/useScrollTop";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
const AllInstructors = () => {
  const [allInstructors, setAllInstructors] = useState([]);

  const { user } = useContext(AuthContext);
  useScrollTop();

  useEffect(() => {
    loadData("allInstructors").then((data) => {
      setAllInstructors(data);
    });

  }, [user]);
  return (
    <Container>
      <Helmet>
        <title>TalkTrove | All-Instructors</title>
      </Helmet>
      <h1 className='text-4xl pb-4 text-center font-bold'>
        Our All Instructors
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
        {allInstructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </Container>
  );
};

export default AllInstructors;
