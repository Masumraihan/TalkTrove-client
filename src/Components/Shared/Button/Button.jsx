const Button = ({ children, event, disabled }) => {
  return (
    <button
      onClick={event}
      className={`w-full flex gap-2 items-center justify-center p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-violet-500 hover:shadow-xl ${
        disabled && "cursor-not-allowed"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
