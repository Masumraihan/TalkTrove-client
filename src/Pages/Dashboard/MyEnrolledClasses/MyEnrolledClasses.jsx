import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import EnrolledClassRow from "./EnrolledClassRow";
import { Link } from "react-router-dom";
import Button from "../../../Components/Shared/Button/Button";
import { BsArrowLeft } from "react-icons/bs";

const MyEnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: enrolledClasses = [] } = useQuery({
    queryKey: ["enrolledClasses"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolledClasses/${user?.email}`);
      return res?.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>TalkTrove | Dashboard | Enrolled-Class</title>
      </Helmet>
      {enrolledClasses.length === 0 ? (
        <>
          <div className='flex items-center justify-center'>
            <Link to='/dashboard/mySelectedClasses'>
              <Button>
                <BsArrowLeft size={26} />
                Selected Page
              </Button>
            </Link>
          </div>
          <h1 className='text-3xl font-bold text-center mt-5'>
            Please Enrolled Any Class
          </h1>
        </>
      ) : (
        <>
          <h1 className='text-4xl pb-4 text-center font-bold'>
            Your Enrolled Classes
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
                            className='px-5 py-3 bg-base-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                          >
                            Class Name
                          </th>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-base-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                          >
                            Price
                          </th>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-base-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                          >
                            Date
                          </th>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-base-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                          >
                            Instructor
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {enrolledClasses.map((classDetails) => (
                          <EnrolledClassRow
                            key={classDetails._id}
                            classDetails={classDetails}
                          />
                        ))}
                      </tbody>
                    </table>
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

export default MyEnrolledClasses;
