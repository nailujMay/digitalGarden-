import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";

export default function HomePage() {
  return (
    <div className="mx-100 mt-5 mb-5 ">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
