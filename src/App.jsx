import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import Features from "./layouts/Features";
import Price from "./layouts/Price";
import Testimonials from "./layouts/Testimonials";
import Cta from "./layouts/Cta";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-900 font-mono text-center text-white">
      <div>
        <Header />
        <Hero />
        <Features />
        <Price />
        <Testimonials />
        <Cta />
        <Footer />
      </div>
    </div>
  );
};

export default App;
