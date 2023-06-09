import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ManageUsersRow from "./ManageUsersRow";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <>
      <h1 className='text-4xl pb-4 text-center font-bold'>Manage Users</h1>
      <div className='container w-2/3 mx-auto px-4 sm:px-8'>
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
                      User info
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                    >
                      Make Admin
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                    >
                      Make Instructor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <ManageUsersRow key={user._id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
