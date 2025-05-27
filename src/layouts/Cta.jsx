import Button from "../components/Button";

const Cta = () => {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="bg-zinc-800 rounded-xl p-12 border border-zinc-700 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold">Join the Community</h2>
        <p className="w-64 mt-8">
          Join the Community of enthusiast learner's @Coursy!
        </p>
        <div className="py-2 px-6 rounded-full bg-white text-black flex gap-4 mt-12">
          <input
            className="text-sm border-none outline-none"
            placeholder="Enter your email"
          />
          <Button className="!text-white border border-gray-400 bg-zinc-900">
            Join
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
