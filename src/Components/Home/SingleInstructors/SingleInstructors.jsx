import React from "react";

const SingleInstructors = ({ instructor }) => {
  const { photo, name, email, students } = instructor;
  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className=''>
        <img src={photo} alt='Shoes' className='rounded-xl h-64 w-full' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>{email}</p>
        <p>Students : {students}</p>
      </div>
    </div>
  );
};

export default SingleInstructors;
