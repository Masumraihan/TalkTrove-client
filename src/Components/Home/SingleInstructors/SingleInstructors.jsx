import { Fade, Slide } from "react-awesome-reveal";

const SingleInstructors = ({ instructor }) => {
  const { photo, name, email, students, className } = instructor;
  return (
    <div data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom">
      <div className='card bg-base-200  hover:shadow-lg'>
        <div>
          <figure className='px-10 pt-8'>
            <img src={photo} alt={className} className='rounded-md h-[250px] w-full' />
          </figure>
        </div>
        <div className='card-body gap-6'>
          <div className='text-sm'>
            <h2 className='card-title'>Name: {name}</h2>
            <p>Email: {email}</p>
          </div>
          <p className='border border-violet-300 rounded-md py-2 px-4'>
            Total Students: {students}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleInstructors;
