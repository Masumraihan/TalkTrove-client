import React, { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import { loadData } from "../../Api/utils";

const AllClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  useEffect(() => {
    loadData("allClasses").then((data) => {
      setAllClasses(data);
    });
  }, []);
  console.log(allClasses);
  return (
    <Container>
      <h1 className='text-4xl pb-4 text-center font-bold'>Our All Classes</h1>
    </Container>
  );
};

export default AllClasses;
