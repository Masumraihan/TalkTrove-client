const InstructorCard = ({ instructor }) => {
  const { photo, name, email, students, className } = instructor;
  return (
    <div className='card hover:shadow-lg'>
      <div>
        <figure className='px-10 pt-8'>
          <img src={photo} alt={className} className='rounded-md' />
        </figure>
      </div>
      <div className='card-body'>
        
          <h2 className='card-title'>Name: {name}</h2>
          <p>Email: {email}</p>
        
        <p className='border border-violet-300 rounded-md py-3 px-4'>
          Total Students: {students}
        </p>
      </div>
    </div>
  );
};

export default InstructorCard;
