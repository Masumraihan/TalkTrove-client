import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import MyClassCard from "./MyClassCard";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../../../Components/Shared/Button/Button";
import { BsArrowLeft } from "react-icons/bs";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myAddedClasses = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/instructor/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>TalkTrove | Dashboard | My-Classes</title>
      </Helmet>
      {myAddedClasses.length === 0 ? (
        <>
          <div className='flex items-center justify-center'>
            <Link to='/dashboard/addClasses'>
              <Button>
                <BsArrowLeft size={26} />
                Add Class
              </Button>
            </Link>
          </div>
          <h1 className='text-3xl font-bold text-center mt-4'>
            You do not added any Classes
          </h1>
        </>
      ) : (
        <>
          <h1 className='text-4xl pb-4 text-center font-bold'>
            Your Added Class
          </h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
            {myAddedClasses.map((classDetails) => (
              <MyClassCard
                refetch={refetch}
                key={classDetails._id}
                classDetails={classDetails}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyClasses;
