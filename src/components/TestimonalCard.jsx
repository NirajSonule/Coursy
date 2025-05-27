const TestimonalCard = ({ avatar, name, designation, message }) => {
  return (
    <div
      className={`bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-white transition-all duration-300 text-center`}
    >
      <h2 className="border border-violet-500 rounded-full p-4">{avatar}</h2>
      <h2 className="text-xl font-semibold mt-8">{name}</h2>
      <p className="text-gray-100 mt-0.5">{designation}</p>
      <p className="mt-4">{`"${message}"`}</p>
    </div>
  );
};

export default TestimonalCard;
