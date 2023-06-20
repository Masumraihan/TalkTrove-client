import { useEffect } from "react";
import { getInstructorClasses } from "../../Api/utils";
import { useState } from "react";
import Button from "../../Components/Shared/Button/Button";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  const { photo, name, email, students, className, _id } = instructor;
  const [classes, setClasses] = useState([]);
  //console.log(instructor);
  useEffect(() => {
    getInstructorClasses(_id).then((data) => {
      setClasses(data.result);
    });
  }, [_id]);
  return (
    <div className='card hover:shadow-lg'>
      <div>
        <figure className='px-10 pt-8'>
          <img
            src={photo}
            alt={className}
            className='rounded-md h-[250px] w-full'
          />
        </figure>
      </div>
      <div className='card-body'>
        <h2 className='card-title'>Name: {name}</h2>
        <p>Email: {email}</p>

        <div className='flex text-sm gap-1'>
          <p className='border border-violet-300 rounded-md py-3 px-2'>
            Total Students: {students}
          </p>
          <p className='border border-violet-300 rounded-md py-3 px-2'>
            Total Classes: {classes.length}
          </p>
        </div>
        <Link to={`/instructorClasses/${_id}`}>
          <Button>View All Classes</Button>
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;
