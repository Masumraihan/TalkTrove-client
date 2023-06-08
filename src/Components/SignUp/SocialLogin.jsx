import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProviders";
import { addUser } from "../../Api/userApi";
const SocialLogin = ({ setError }) => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const user = result.user
        addUser(user.displayName,user.email,user.photoURL);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className='py-6'>
      <div className='divider'> Login with social accounts</div>

      <div
        onClick={handleGoogleSignIn}
        className='flex justify-center items-center space-x-2 border py-2 border-gray-300 border-rounded cursor-pointer rounded-lg'
      >
        <FcGoogle size={32} />

        <p>Continue with Google</p>
      </div>
    </div>
  );
};

export default SocialLogin;
