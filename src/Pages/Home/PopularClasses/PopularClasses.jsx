import React, { useEffect, useState } from "react";
import SingleClass from "../../../Components/Home/SingleClass/SingleClass";
import Container from "../../../Components/Shared/Container";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/classes`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, []);
  return (
    <Container>
      <div className='py-20'>
        <h1 className='text-4xl pb-4 text-center font-bold'>
          Our Popular Classes
        </h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7'>
          {classes.map((singleClass) => (
            <SingleClass key={singleClass._id} singleClass={singleClass} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PopularClasses;
