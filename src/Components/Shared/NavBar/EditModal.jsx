import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import { FaRegEdit } from "react-icons/fa"
import { imageUpload } from '../../../Api/utils';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { toast } from 'react-hot-toast';

const EditModal = ({ closeModal, isOpen, profileInfo }) => {
  const [name, setName] = useState(profileInfo?.name);
  const [email, setEmail] = useState(profileInfo?.email)
  const [photo, setPhoto] = useState(null);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const photoRef = useRef(null);
  const [axiosSecure] = useAxiosSecure()
  const {profileRefetch} = useContext(AuthContext)

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedInfo = {
      name: name || profileInfo.name,
      email: email || profileInfo?.email,
      photo: uploadedPhoto || profileInfo?.photo
    }
    const update = axiosSecure.patch(`/users/${profileInfo?.email}`, updatedInfo).then(data => {
      profileRefetch()
      console.log(data);
      if (data.data.modifiedCount) {
        closeModal()
      }
    })
    toast.promise(update,{
      loading:"Updating...",
      success:"Update successfully",
      error:"something happened"
    })
  }

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target?.files?.[0];
    const upload = imageUpload(selectedPhoto).then(data => {
      setUploadedPhoto(data.data?.url);
      setPhoto(selectedPhoto);
    })
    toast.promise(upload,{
      loading:"Processing...",
      success:"Click update button to update info",
      error:"something happened"
    })
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-center text-gray-900"
                  >
                    Update Your Info
                  </Dialog.Title>

                  <div>
                    <div className="avatar py-5 w-full relative">
                      <div className="w-32 mx-auto rounded-full ring ring-violet-500 ring-offset-base-100 ring-offset-2">
                        <img src={photo ? URL.createObjectURL(photo) : profileInfo?.photo} alt={profileInfo?.name} />
                      </div>
                      <div className='absolute right-32 box-border w-16 h-16 bottom-4 text-white'>
                        <label className="flex items-center cursor-pointer hover:bg-gray-800 transition-colors bg-gray-700 rounded mt-10 justify-center gap-x-1">
                          <FaRegEdit />
                          <span>Edit</span>
                          <input ref={photoRef} onChange={handlePhotoChange} type="file" name="photo" id="photo" className='hidden' />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='w-full pb-10 flex flex-col justify-center items-center text-gray-800 rounded-xl '>
                    <form onSubmit={handleUpdate} className='w-full'>
                      <div className='grid gap-10'>
                        <div className='space-y-6'>
                          <div className='space-y-1 text-sm'>
                            <label htmlFor='name' className='block text-gray-600'>
                              Name
                            </label>
                            <input
                              className='w-full px-4 py-3 text-gray-800 border border-violet-300 focus:outline-violet-500 rounded-md '
                              name='name'
                              onChange={(e) => setName(e.target.value)}
                              id='name'
                              type='text'
                              defaultValue={profileInfo?.name}
                              placeholder='Your Name'
                            />
                          </div>
                        </div>
                        <div className='space-y-6'>
                          <div className='space-y-1 text-sm'>
                            <label htmlFor='name' className='block text-gray-600'>
                              Email
                            </label>
                            <input
                              className='w-full px-4 py-3 text-gray-800 border border-violet-300 focus:outline-violet-500 rounded-md '
                              name='email'
                              id='email'
                              type='email'
                              onChange={(e) => setEmail(e.target.value)}
                              defaultValue={profileInfo?.email}
                              placeholder='Your Email'
                            />
                          </div>
                        </div>
                        
                      </div>

                      <button
                        type='submit'
                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-violet-500'
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditModal;