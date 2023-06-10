import Lottie from "lottie-react";
import errorAnimation from "../../../public/ErrorPageAnimation.json";

const ErrorPage = () => {
  return (
    <div className="h-screen flex w-full">
      <Lottie animationData={errorAnimation} loop={true}></Lottie>
    </div>
  );
};

export default ErrorPage;
