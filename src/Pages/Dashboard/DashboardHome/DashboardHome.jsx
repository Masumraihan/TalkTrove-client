import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Providers/AuthProviders";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='min-h-screen '>
      <Helmet>
        <title>TalkTrove | Dashboard | Home</title>
      </Helmet>
      <h1 className="text-3xl text-center font-extrabold">Welcome back, {user?.displayName} </h1>
    </div>
  );
};

export default DashboardHome;
