import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import SupportSection from "../components/SupportSection";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
  <Navbar />

  <Hero />

<CategorySection />

<Services />

<WhyChooseUs />

<SupportSection />

<StatsSection />

<Testimonials />

<Footer />


</>
  );
}

export default Home;