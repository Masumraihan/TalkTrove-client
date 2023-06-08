import { MoonLoader } from "react-spinners";


const Loader = () => {
  return (
    <div
      className='
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
    >
     <MoonLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
