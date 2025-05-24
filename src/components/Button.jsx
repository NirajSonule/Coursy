const Button = ({ className, children, onClick }) => {
  const baseStyles =
    "py-2 px-5 font-semibold text-sm rounded-4xl bg-white text-zinc-900 hover:text-violet-700 transition duration-300 cursor-pointer";

  return (
    <button className={`${baseStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
