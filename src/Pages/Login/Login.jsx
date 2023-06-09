import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import SocialLogin from "../../Components/SignUp/SocialLogin";

const Login = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ email, password }) => {
    signIn(email, password)
      .then((result) => {
        console.log(result?.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err?.message);
      });
  };

  return (
    <div className='hero'>
      <Helmet>
        <title>TalkTrove | Login</title>
      </Helmet>
      <>
        <div className='hero-content w-full md:w-2/3 lg:w-1/3 flex-col'>
          <h1 className='text-4xl font-semibold'>Sign In</h1>
          <div className='card flex-shrink-0 w-full shadow-2xl bg-base-100'>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  {...register("email", { required: true })}
                  placeholder='email'
                  className='input input-bordered'
                />
                {errors.email && (
                  <span className='text-red-400'>This field is required</span>
                )}
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <div className='relative'>
                  {/*// TODO get eye icon should be a component for password and*/}
                  {!showPass ? (
                    <FaEye
                      onClick={() => setShowPass(!showPass)}
                      size={24}
                      className='absolute transform top-1/2 -translate-y-1/2 right-2'
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShowPass(!showPass)}
                      size={24}
                      className='absolute transform top-1/2 -translate-y-1/2 right-2'
                    />
                  )}
                  <input
                    type={!showPass ? "password" : "text"}
                    placeholder='password'
                    {...register("password", {
                      required: true,
                    })}
                    className='input input-bordered w-full'
                  />
                </div>
                {errors.password && (
                  <span className='text-red-400'>This field is required</span>
                )}
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>

              {error && <p className='text-red-400'>{error}</p>}
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
              </div>
            </form>
            <div>
              <p className='pb-6 pl-9'>
                don&apos;t have an account{" "}
                <Link to='/signup' className='text-primary'>
                  signup
                </Link>
              </p>
              <div className='px-9'>
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
