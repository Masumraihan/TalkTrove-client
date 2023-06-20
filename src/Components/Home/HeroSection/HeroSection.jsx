import image from "../../../assets/heroImage2.svg";
import bg from "../../../assets/bg3.png";
import darkBg from "../../../assets/darkBg.png";
import HeroSliders from "./HeroSliders";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const HeroSection = () => {
  const { theme } = useContext(AuthContext);

  return (
    <>
      <div
        className='hero min-h-[90vh] min-w-full overflow-hidden '
        style={{ backgroundImage: `url(${theme === "night" ? darkBg : bg})` }}
      >
        <>
          <div className='hero-content flex-row-reverse p-0 text-neutral-content'>
            <img className=' max-h-[80vh] w-1/2' src={image} alt='hero image' />
            <HeroSliders />
          </div>
        </>
      </div>
    </>
  );
};

export default HeroSection;
