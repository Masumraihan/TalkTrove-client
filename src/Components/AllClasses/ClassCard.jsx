import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const ClassCard = ({ classDetails }) => {
  const { user } = useContext(AuthContext);
  // TODO admin or instructor can't select class button disabled
  const { image, instructor, price, name, seats, students, _id } = classDetails;
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <figure className='px-10  pt-10'>
        <img src={image} alt='Shoes' className='rounded-xl h-40' />
      </figure>
      <div className='card-body text-center'>
        <h2 className='card-title'>{name}</h2>
        <p className='text-start text-xl font-semibold'>{instructor}</p>
        <p className='text-start text-xl font-semibold'>
          Available seats : {seats}
        </p>
        <div className='card-actions items-center'>
          <p className='text-start text-xl font-semibold'>Price : ${price}</p>
          <p className='text-start text-xl font-semibold'>
            Students : {students}
          </p>
        </div>
        <button
          disabled={seats <= 0 || user?.role !== "student"}
          className=' btn btn-primary'
        >
          Select Class
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
