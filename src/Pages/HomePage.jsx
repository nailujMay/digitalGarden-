import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Body from "../Components/Body";

export default function HomePage() {
  return (
    <div className="bg-custom-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Body />
      </main>
    </div>
  );
}
