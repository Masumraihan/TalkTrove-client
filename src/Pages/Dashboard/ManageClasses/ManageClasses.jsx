import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ManageClassesRow from "./ManageClassesRow";
import { toast } from "react-hot-toast";
import FeedbackModal from "../../../Components/Dashboard/FeedbackModal";
import { useState } from "react";

const ManageClasses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [axiosSecure] = useAxiosSecure();
  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allClasses/admin");
      return res.data;
    },
  });
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const updateClassStatus = (id, status) => {
    axiosSecure.patch(`/classes/${id}`, { status }).then((data) => {
      console.log(data);
      if (data.data.modifiedCount >= 0) {
        refetch();
        toast.success(
          status === "approved"
            ? "class approved successfully"
            : "class deny successfully"
        );
      }
    });
  };

  const handleDenied = (e) => {
    // TODO Add Feedback if admin denied the class 
    e.preventDefault();
    const feedback = e.target.feedback.value;
    console.log(feedback);
  };

  return (
    <>
      <h1 className='text-4xl pb-4 text-center font-bold'>
        Manage Classes
      </h1>
      <div>
        <div className='container mx-auto px-4 sm:px-8'>
          <div className='py-4'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-y-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                      >
                        Class & instructor
                      </th>

                      <th
                        scope='col'
                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                      >
                        Instructor Email
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                      >
                        Available Seats
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                      >
                        Price
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                      >
                        Status
                      </th>

                      <th
                        scope='col'
                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                      >
                        Approved
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                      >
                        Deny
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allClasses.map((classDetails) => (
                      <ManageClassesRow
                        key={classDetails._id}
                        classDetails={classDetails}
                        updateClassStatus={updateClassStatus}
                        openModal={openModal}
                      />
                    ))}
                  </tbody>
                </table>
                <FeedbackModal
                  openModal={openModal}
                  closeModal={closeModal}
                  isOpen={isOpen}
                  handleDenied={handleDenied}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageClasses;
