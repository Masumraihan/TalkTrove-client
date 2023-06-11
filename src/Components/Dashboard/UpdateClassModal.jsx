import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import UpdateClassForm from "./UpdateClassForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { imageUpload } from "../../Api/utils";
import { toast } from "react-hot-toast";

const UpdateClassModal = ({ isOpen, closeModal, classDetails, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const className = form.className.value;
    const image = form.image.files[0];
    const price = form.price.value;
    const seats = form.seats.value;
    imageUpload(image)
      .then((data) => {
        const image = data.data.display_url;
        const classInfo = {
          className,
          image,
          price: parseFloat(price),
          seats: parseInt(seats),
          date: new Date(),
        };
        console.log(classInfo);
        axiosSecure
          .put(`/classes/${classDetails._id}`, classInfo)
          .then((data) => {
            console.log(data?.data);
            if (data.data.modifiedCount > 0) {
              closeModal();
              refetch();
              toast.success("Your Class Update Successfully");
            }
          });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleImageChange = (img) => {
    setUploadButtonText(img.name);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Feedback Form Admin
                </Dialog.Title>
                <div className='w-full'>
                  <UpdateClassForm
                    handleImageChange={handleImageChange}
                    handleSubmit={handleSubmit}
                    loading={loading}
                    uploadButtonText={uploadButtonText}
                    classDetails={classDetails}
                  />
                </div>

                <div className='mt-4 flex justify-end items-center'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200'
                    onClick={closeModal}
                  >
                    close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateClassModal;
