import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const AddClassForm = () => {
    const {user} = useContext(AuthContext)

    const handleSubmit = (e) => {

    }
    
  return (
    <div className='w-full py-10 flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form className="w-full md:w-1/2">
        <div className='grid gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='className' className='block text-gray-600'>
                Class Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-violet-300 focus:outline-violet-500 rounded-md '
                name='ClassName'
                id='className'
                type='text'
                placeholder='Class Name'
                required
              />
            </div>
          </div>
          <div className='space-y-6'>
            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dashed border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-violet-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-violet-500'>
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='instructorEmail' className='block text-gray-600'>
                Instructor Email
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-violet-300 focus:outline-violet-500 rounded-md '
                name='email'
                id='instructorEmail'
                type='text'
                value={user?.email}
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='className' className='block text-gray-600'>
                Instructor Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-violet-300 focus:outline-violet-500 rounded-md '
                name='instructorName'
                id='instructorName'
                type='text'
                value={user?.displayName}
                required
              />
            </div>
            <div className='grid md:grid-cols-2 gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-violet-300 focus:outline-violet-500 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='seats' className='block text-gray-600'>
                  Available Seats
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-violet-300 focus:outline-violet-500 rounded-md '
                  name='seats'
                  id='seats'
                  type='number'
                  placeholder='Available Seats'
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-violet-500'
        >
          {/*{loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Save & Continue'
          )}*/}
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClassForm;
