const MyClassCard = ({ classDetails }) => {
  const { className, image, status, enrolledStudents } = classDetails;
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <figure>
        <img className='h-[200px] w-full' src={image} alt={className} />
      </figure>
      <div className='card-body space-y-3'>
        <h2 className='card-title'>
          {className}
          <div className='badge badge-accent text-white p-3'>{status}</div>
        </h2>
        <div className='card-actions justify-start items-center'>
          <div>Enrolled Students: </div>
          <div className='badge badge-outline border-violet-500'>
            {enrolledStudents}
          </div>
        </div>
        <div className='card-actions justify-between items-center'>
          <button className='btn-sm mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-violet-500'>
            Feedback
          </button>
          <button className='btn-sm mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-violet-500'>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyClassCard;
