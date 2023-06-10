import { useState } from "react";
import ShowFeedbackModal from "../../../Components/Dashboard/ShowFeedbackModal";

const MyClassCard = ({ classDetails }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const {
    className,
    image,
    status,
    enrolledStudents,
    feedback = "",
  } = classDetails;
  if (feedback) {
    console.log(feedback);
  }
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <figure>
        <img className='h-[200px] w-full' src={image} alt={className} />
      </figure>
      <div className='card-body space-y-3'>
        <h2 className='card-title'>
          {className}
          <div
            className={`badge ${status === "approved" && "badge-accent"} ${
              status === "denied" && " badge-warning"
            } ${status === "pending" && "badge-info"}  text-white p-3`}
          >
            {status}
          </div>
        </h2>
        <div className='card-actions justify-start items-center'>
          <div>Enrolled Students: </div>
          <div className='badge badge-outline border-violet-500'>
            {enrolledStudents}
          </div>
        </div>
        <div className='card-actions justify-between items-center'>
          <button
            onClick={openModal}
            className='btn-sm mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-violet-500'
          >
            Feedback
          </button>
          <button className='btn-sm mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-violet-500'>
            Update
          </button>
        </div>
      </div>
      <>
        <ShowFeedbackModal
          isOpen={isOpen}
          closeModal={closeModal}
          feedback={feedback}
        />
      </>
    </div>
  );
};

export default MyClassCard;
