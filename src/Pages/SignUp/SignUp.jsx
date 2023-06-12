import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Providers/AuthProviders";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../Components/SignUp/SocialLogin";
import { addUser } from "../../Api/userApi";

const SignUp = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ name, email, password, photo, confirmPassword }) => {
    setError("");
    if (password !== confirmPassword) {
      return setError("password not matched");
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        addUser(name, email, photo);
        updateUserProfile(name, photo)
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            setError(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className='hero'>
      <Helmet>
        <title>TalkTrove | SignUp</title>
      </Helmet>
      <div className='hero-content w-full md:w-2/3 lg:w-1/3 flex-col'>
        <h1 className='text-4xl font-semibold'>Create Account</h1>
        <div className='card flex-shrink-0 w-full shadow-2xl bg-base-100'>
          <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Your Full Name</span>
              </label>
              <input
                type='text'
                {...register("name", { required: true })}
                placeholder='name'
                className='input input-bordered'
              />
            </div>
            {errors?.name && (
              <span className='text-red-600'>Name is required</span>
            )}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Your Photo URL</span>
              </label>
              <input
                type='url'
                {...register("photo", { required: true })}
                placeholder='photo url'
                className='input input-bordered'
              />
            </div>
            {errors?.photo && (
              <span className='text-red-600'>Photo url is required</span>
            )}
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
            </div>
            {errors?.email && (
              <span className='text-red-600'>Email is required</span>
            )}

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
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className='input input-bordered w-full'
                />
              </div>
            </div>
            {errors?.password?.type === "required" && (
              <p className='text-red-400'>Password is required</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className='text-red-400'>
                Password must contain at least one uppercase, one lowercase, one
                number and one special character.
              </p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className='text-red-400'>
                Password must be at least 6 characters long
              </p>
            )}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Confirm Password</span>
              </label>
              <div className='relative'>
                {!showConfirmPass ? (
                  <FaEye
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                    size={24}
                    className='absolute transform top-1/2 -translate-y-1/2 right-2'
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                    size={24}
                    className='absolute transform top-1/2 -translate-y-1/2 right-2'
                  />
                )}
                <input
                  type={!showConfirmPass ? "password" : "text"}
                  placeholder='confirm password'
                  {...register("confirmPassword", {
                    required: true,
                  })}
                  className='input input-bordered w-full'
                />
              </div>
            </div>
            {errors?.confirmPassword?.type === "required" && (
              <p className='text-red-400'>Confirm Password is required</p>
            )}
            {error && <p className='text-red-400'>{error}</p>}

            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Create Account</button>
            </div>
          </form>
          <p className='pl-9'>
            Already have an account{" "}
            <Link to='/login' className='text-primary'>
              login
            </Link>
          </p>
          <div className='px-9'>
            <SocialLogin setError={setError} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
