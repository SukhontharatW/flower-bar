import About from "../ui/About";
import Contact from "../ui/Contact";
import Hero from "../ui/Hero";
import Product from "../ui/Product";
import Service from "../ui/Service";
import Testimonial from "../ui/Testimonial";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Product />
      <Testimonial />
      <Contact />
    </>
  );
}

export default Home;
