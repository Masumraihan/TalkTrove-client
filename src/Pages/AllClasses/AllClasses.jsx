import { useContext, useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import { loadData } from "../../Api/utils";
import ClassCard from "../../Components/AllClasses/ClassCard";
import Loader from "../../Components/Shared/Loader";
import { AuthContext } from "../../Providers/AuthProviders";

const AllClasses = () => {
  const { loader } = useContext(AuthContext);
  const [allClasses, setAllClasses] = useState([]);
  useEffect(() => {
    loadData("allClasses").then((data) => {
      setAllClasses(data);
    });
  }, []);
  if (loader) {
    return <Loader />;
  }
  return (
    <Container>
      {allClasses.length <= 0 ? (
        <h1 className='text-4xl pb-4 text-center font-bold'>
          No Class Available
        </h1>
      ) : (
        <>
          <h1 className='text-4xl pb-4 text-center font-bold'>
            Our All Classes
          </h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
            {allClasses.map((classDetails) => (
              <ClassCard key={classDetails._id} classDetails={classDetails} />
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default AllClasses;
