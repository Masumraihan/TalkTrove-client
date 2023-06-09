const ManageUsersRow = ({ user, updateUserRole }) => {
  const { name, email, photo, role, _id } = user;
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
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className={`absolute inset-0 ${
              role === "admin" && "bg-green-300"
            } ${role === "instructor" && "bg-red-300"} ${
              role === "student" && "bg-violet-300"
            }  opacity-50 rounded-full`}
          ></span>
          <span className='relative'>{role}</span>
        </span>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          disabled={role === "admin"}
          onClick={() => updateUserRole(_id, "admin")}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-300 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Admin</span>
        </button>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          disabled={role === "instructor"}
          onClick={() => updateUserRole(_id, "instructor")}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-300 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Instructor</span>
        </button>
      </td>
    </tr>
  );
};

export default ManageUsersRow;
