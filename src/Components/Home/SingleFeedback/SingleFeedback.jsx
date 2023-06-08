import React from "react";

const SingleFeedback = ({ fb }) => {
  const { image, courseName, feedback,studentName } = fb;
  return (
    <div className='w-full max-w-sm text-center p-4 flex items-center justify-center rounded-lg shadow'>
      <div className='flex flex-col items-center pb-10'>
        <img
          className='w-24 h-24 mb-3 rounded-full shadow-lg'
          src={image}
          alt='Bonnie image'
        />
        <h5 className='mb-1 text-xl font-medium'>{studentName}</h5>
        <h5 className='mb-1 text-xl font-medium'>{courseName}</h5>
        <span className='text-sm'>{feedback}</span>
      </div>
    </div>
  );
};

export default SingleFeedback;
