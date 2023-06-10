const ManageClassesRow = ({ classDetails, updateClassStatus, openModal }) => {
  const { email, price, name, image, className, seats, status, _id } =
    classDetails;

  return (
    <>
      <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <div className='flex items-center space-x-3'>
            <div className='avatar'>
              <div className='mask mask-squircle w-16 h-16'>
                <img src={image} alt={name} />
              </div>
            </div>
            <div>
              <div className='font-bold'>{className}</div>
              <div className='text-sm opacity-50'>{name}</div>
            </div>
          </div>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{email}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{seats}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>${price}</p>
        </td>

        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span className='relative inline-block px-3 py-2 font-semibold text-green-900 leading-tight'>
            <span
              aria-hidden='true'
              className={`absolute inset-0 ${
                status === "approved" && "bg-green-300"
              } ${status === "denied" && "bg-red-300"} ${
                status === "pending" && "bg-violet-300"
              }  opacity-50 rounded-md`}
            ></span>
            <span className='relative'>{status}</span>
          </span>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <button
            disabled={status === "approved" || status === "denied"}
            onClick={() => updateClassStatus(_id, "approved")}
            className={`relative ${
              status === "approved" || status === "denied"
                ? "cursor-not-allowed"
                : "cursor-pointer "
            } inline-block px-3 py-1 font-semibold text-green-900 leading-tight`}
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-300 opacity-50 rounded-full'
            ></span>
            <span className='relative'>Approved</span>
          </button>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <button
            disabled={status === "approved" || status === "denied"}
            onClick={() => openModal()}
            className={`relative ${
              status === "approved" || status === "denied"
                ? "cursor-not-allowed"
                : "cursor-pointer "
            } inline-block px-3 py-1 font-semibold text-green-900 leading-tight`}
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-red-300 opacity-50 rounded-full'
            ></span>
            <span className='relative'>Deny</span>
          </button>
        </td>
      </tr>
    </>
  );
};

export default ManageClassesRow;
