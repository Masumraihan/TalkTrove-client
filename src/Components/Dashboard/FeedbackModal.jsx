import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const FeedbackModal = ({ closeModal, isOpen, handleFeedback }) => {
  return (
    <>
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
                <Dialog.Panel className='w-full max-w-xl transform overflow-hidden rounded-2xl bg-white px-8 py-16 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Why you want to denied this class?
                  </Dialog.Title>
                  <form onSubmit={handleFeedback}>
                    <div className='mt-2 text-sm'>
                      <textarea
                        required
                        id='feedback'
                        className='block rounded-md focus:violet-300 w-full h-44 px-4 py-3 text-gray-800 border border-violet-300 focus:outline-violet-500 '
                        name='feedback'
                      ></textarea>
                    </div>

                    <div className='mt-4 flex justify-between items-center'>
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200'
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        type='submit'
                        className='inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200'
                      >
                        Send Feedback
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FeedbackModal;
