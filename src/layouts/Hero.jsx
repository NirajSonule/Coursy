import Button from "../components/Button";
import heroImg from "../assets/hero_img.svg";

const Hero = () => {
  return (
    <section className="px-12 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <div className="flex items-center text-center md:text-left py-24 sm:py-36 md:py-44">
        <div>
          <h2 className="max-w-lg text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Learn Anything, Anytime, From the Best
          </h2>
          <p className="max-w-lg text-sm lg:text-md text-gray-100 mb-8">
            Join thousands of learners discovering top-rated courses taught by
            expert tutors—any skill, any level, all in one place.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-24">
            <Button>Get Started</Button>
            <div className="flex flex-col">
              <p>42k +</p>
              <p className="text-xs font-thin">using this app</p>
            </div>
          </div>
        </div>
      </div>
      <section className="hidden md:flex justify-center items-center p-4 lg:p-24">
        <img src={heroImg} alt="Hero-Image" className="max-w-full" />
      </section>
    </section>
  );
};

export default Hero;
