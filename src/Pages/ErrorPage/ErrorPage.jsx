import Lottie from "lottie-react";
import errorAnimation from "../../../public/ErrorPageAnimation.json";
import Button from "../../Components/Shared/Button/Button";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='h-[86vh] w-screen flex items-center justify-center relative '>
      <div className='w-44 absolute top-5 left-5 z-10'>
        <Link to='/'>
          <Button>
            <BsArrowLeft size={26} />
            Home Page
          </Button>
        </Link>
      </div>
      <Lottie animationData={errorAnimation} loop={true}></Lottie>
    </div>
  );
};

export default ErrorPage;
