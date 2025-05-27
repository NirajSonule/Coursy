import PriceCard from "../components/PriceCard";

const basicList = [
  "👨‍🏫 Access to 3 courses",
  "🤝 Community guide",
  "📝 Downloadable notes",
  "📅 Monthly updates",
];

const standardList = [
  "👨‍🏫 Access to 6 courses",
  "🤝 Community guide + priority support",
  "📝 Downloadable notes",
  "📅 Bi-weekly updates",
  "📺 Exclusive webinars",
];

const proList = [
  "👨‍🏫 Access to 9+ courses",
  "🤝 Dedicated mentor support",
  "📝 Downloadable notes & templates",
  "📅 Weekly updates",
  "📺 Exclusive webinars",
  "📈 Progress tracking dashboard",
];

const Price = () => {
  return (
    <section className="px-6 md:px-12 py-20">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
        Choose Your Plan
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PriceCard
          title="Basic"
          price="10.00"
          list={basicList}
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-white transition-all duration-300"
        />
        <PriceCard
          title="Standard"
          price="15.00"
          list={standardList}
          className="bg-zinc-800 rounded-xl p-6 border-2 border-purple-500 shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
        />
        <PriceCard
          title="Pro"
          price="20.00"
          list={proList}
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-white transition-all duration-300"
        />
      </div>
    </section>
  );
};

export default Price;
