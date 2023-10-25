import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";
import Images from "./components/Images";
import Accordions from "./components/Accordion";
import Newsletter from "./components/Newsletter";
import Reviews from "./components/Reviews";

export default function App() {
  return (
    <div className="flex2">
      <div>
        <Navbar />
        <HeroSection />
      </div>
      <Intro />
      <div>
        <h1 style={{ textAlign: "center" }}>Why choose us?</h1>
        <div className="flex">
          <Card title="98% Success Rate" color="black" type="rating" />
          <Card title="100% Success Rate" color="#2E2E2E" type="rating" />
          <Card title="100% Success Rate" color="black" type="rating" />
        </div>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>Areas of Practices</h1>
        <Images type="gallery" />
      </div>
      <Reviews />
      <div>
        <h1 style={{ textAlign: "center" }}>Our Team</h1>
        <Images type="team" />
      </div>
      <div>
        <h1 style={{ paddingInline: "4rem" }}>FAQs</h1>
        <div className="flex">
          <p style={{ opacity: "0.3" }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <div className="flex2">
            <h4>Do I need a personal injury report?</h4>
            <p style={{ opacity: "0.3" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <Accordions />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
