const ManageUsersRow = ({ user }) => {
  const { name, email, photo, role } = user;
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-16 h-16'>
              <img src={photo} alt={name} />
            </div>
          </div>
          <div>
            <div className='font-bold'>{name}</div>
            <div className='text-sm opacity-50'>{email}</div>
          </div>
        </div>
      </td>
      
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{role}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-violet-300 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Admin</span>
        </button>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-violet-300 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Instructor</span>
        </button>
      </td>
    </tr>
  );
};

export default ManageUsersRow;
