import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Features from "../layouts/Features";
import Price from "../layouts/Price";
import Testimonials from "../layouts/Testimonials";
import Cta from "../layouts/Cta";
import Footer from "../layouts/Footer";

const LandingPage = () => {
  return (
    <div className="w-full h-full bg-zinc-900 font-mona_sans text-white">
      <Header />
      <Hero />
      <Features />
      <Price />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
};

export default LandingPage;
