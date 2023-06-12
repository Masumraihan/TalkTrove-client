import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Loader from "../../../Components/Shared/Loader";
import SelectedClassRow from "./SelectedClassRow";
import { toast } from "react-hot-toast";
import PaymentModal from "../../../Components/Dashboard/PaymentModal";
import { Link } from "react-router-dom";
import Button from "../../../Components/Shared/Button/Button";
import { BsArrowLeft } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

const MySelectedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [classInfo, setClassInfo] = useState({});
  const { user, loader } = useContext(AuthContext);
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selectedClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      return res.data;
    },
  });

  const handlePayment = (paymentClassInfo) => {
    openModal();
    setClassInfo(paymentClassInfo);
  };

  const handleDelete = (id) => {
    axiosSecure.delete(`/classes/${id}`).then((data) => {
      console.log(data);
      if (data.data.deletedCount > 0) {
        refetch();
        toast.success("Class Deleted Successfully");
      }
    });
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  if (loader) {
    return <Loader />;
  }

  return (
    <div>
      <Helmet>
        <title>TalkTrove | Dashboard | My-Selected-Class</title>
      </Helmet>
      {selectedClasses.length === 0 ? (
        <>
          <div className='flex items-center justify-center'>
            <Link to='/allClasses'>
              <Button>
                <BsArrowLeft size={26} />
                Classes Page
              </Button>
            </Link>
          </div>
          <h1 className='text-3xl font-bold text-center mt-5'>
            Please Select Your Class
          </h1>
        </>
      ) : (
        <>
          <h1 className='text-4xl pb-4 text-center font-bold'>
            Your Selected Classes
          </h1>
          <div>
            <div className='container mx-auto px-4 sm:px-8'>
              <div className='py-4'>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                  <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                    <table className='min-w-full leading-normal'>
                      <thead>
                        <tr>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                          >
                            Class Name
                          </th>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                          >
                            Email
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
                            Date
                          </th>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                          >
                            Instructor
                          </th>

                          <th
                            scope='col'
                            className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                          >
                            Payment
                          </th>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                          >
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedClasses.map((classDetails) => (
                          <SelectedClassRow
                            key={classDetails._id}
                            classDetails={classDetails}
                            handleDelete={handleDelete}
                            handlePayment={handlePayment}
                          />
                        ))}
                      </tbody>
                    </table>
                    <PaymentModal
                      classInfo={classInfo}
                      isOpen={isOpen}
                      closeModal={closeModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MySelectedClasses;
