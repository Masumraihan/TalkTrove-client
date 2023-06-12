import { Zoom } from "react-awesome-reveal";

const SingleClass = ({ singleClass }) => {
  const { image, className, price, name, seats, enrolledStudents } =
    singleClass;
  return (
    <Zoom>
      <div className='hero rounded-xl py-8 hover:shadow-lg transition-shadow bg-base-200'>
        <div className='hero-content gap-4 flex-col lg:flex-row'>
          <img
            src={image}
            className='md:w-[360px] md:h-[220px] rounded-lg shadow-2xl'
          />
          <div>
            <h1 className='text-2xl font-bold'>{className} </h1>
            <h2 className='py-2 text-xl font-semibold'>Instructor: {name}</h2>
            <h2 className='text-xl font-semibold'>price: ${price}</h2>
            <div className='mt-6 flex flex-shrink-0 gap-1 text-sm items-center'>
              <p className='border border-violet-300 rounded-md py-3 px-2'>
                Available Seats: {seats}
              </p>
              <p className='border border-violet-300 rounded-md py-3 px-2'>
                Enrolled Students: {enrolledStudents}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default SingleClass;
