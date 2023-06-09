import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import MyClassCard from "./MyClassCard";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myAddedClasses = [] } = useQuery({
    queryKey: ["myClasses", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/instructor/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <h1 className='text-4xl pb-4 text-center font-bold'>Your Added Class</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
        {myAddedClasses.map((classDetails) => (
          <MyClassCard key={classDetails._id} classDetails={classDetails} />
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
