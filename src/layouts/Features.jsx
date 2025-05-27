const Features = () => {
  return (
    <section className="px-6 md:px-12 py-20 flex flex-col gap-12">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Feature Card 1 */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 shadow-md hover:shadow-indigo-500/20 transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-400">
            Expert-Led Courses
          </h3>
          <p className="mb-4 text-gray-300">
            Coursy! connects you with instructors who are leaders in their
            fields—CEOs, developers, designers, authors, and educators with
            years of practical experience.
          </p>
          <ul className="list-disc pl-5 text-gray-400 space-y-2 text-sm">
            <li>Real-world insights from industry experts</li>
            <li>Interactive Q&A, assignments, and community feedback</li>
            <li>Continuously updated content for current trends</li>
          </ul>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 shadow-md hover:shadow-rose-500/20 transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-rose-400">
            Certificates That Count
          </h3>
          <p className="mb-4 text-gray-300">
            Show the world what you’ve learned.
          </p>
          <ul className="list-disc pl-5 text-gray-400 space-y-2 text-sm">
            <li>Earn verifiable, shareable certificates</li>
            <li>Highlight on LinkedIn, CVs, and applications</li>
            <li>Backed by Coursy!’s credibility and experts</li>
          </ul>
        </div>
      </div>

      {/* Features Pill List */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl font-bold">What We Offer</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {[
            "Lifetime Support",
            "Video Lessons",
            "Amazing Tutors",
            "Wide Course Selection",
            "Learn on Your Schedule",
          ].map((feature, index) => (
            <li
              key={index}
              className="bg-zinc-800 border border-zinc-700 text-gray-200 px-5 py-2 rounded-full text-sm hover:border-white transition-all duration-200"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
