const Button = ({ children }) => {
  return (
    <button className='w-full flex gap-2 items-center p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-violet-500'>
      {children}
    </button>
  );
};

export default Button;
