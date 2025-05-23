const Button = ({ children, onClick }) => {
  return (
    <button
      className="py-2 px-5 font-semibold text-sm rounded-4xl bg-white text-zinc-900 hover:text-violet-700 transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
