import { useEffect, useState } from "react";
import SingleClass from "../../../Components/Home/SingleClass/SingleClass";
import Container from "../../../Components/Shared/Container";
import { loadData } from "../../../Api/utils";
import { Link } from "react-router-dom";
import Button from "../../../Components/Shared/Button/Button";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    loadData("classes").then((data) => {
      setClasses(data);
    });
  }, []);
  return (
    <Container>
      <div className='py-20'>
        <h1 className='text-4xl pb-4 text-center font-bold'>
          Our Popular Classes
        </h1>
        <div className='grid md:grid-cols-2 gap-7'>
          {classes?.map((singleClass) => (
            <SingleClass key={singleClass._id} singleClass={singleClass} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Link to="/allClasses">
            <Button>All Classes</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default PopularClasses;
