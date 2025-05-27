import TestimonalCard from "../components/testimonalCard";

const Testimonials = () => {
  return (
    <section className="px-6 md:px-12 py-20">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
        Our Users
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <TestimonalCard
          avatar="🧔‍♂️"
          name="John Doe"
          designation="Student"
          message="Liked the way of teaching."
        />
        <TestimonalCard
          avatar="👩‍💻"
          name="Sarah Lee"
          designation="Software Engineer"
          message="The lessons are very intuitive and easy to follow. Great experience!"
        />
        <TestimonalCard
          avatar="👨‍🏫"
          name="Michael Chen"
          designation="Tutor"
          message="A fantastic platform for both learning and teaching. Highly recommend."
        />
        <TestimonalCard
          avatar="👩‍🎓"
          name="Priya Patel"
          designation="University Student"
          message="I improved my grades thanks to this resource. Clear and concise content."
        />
        <TestimonalCard
          avatar="👨‍💼"
          name="James Smith"
          designation="Project Manager"
          message="Helpful for brushing up on key concepts quickly. Very efficient."
        />
      </div>
    </section>
  );
};

export default Testimonials;
