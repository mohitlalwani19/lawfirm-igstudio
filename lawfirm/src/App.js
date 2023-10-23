import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Intro />
      <h1 style={{ textAlign: "center" }}>Why choose us?</h1>
      <div className="flex">
        <Card title="98% Success Rate" color="black" />
        <Card title="100% Success Rate" color="#2E2E2E" />
        <Card title="98% Success Rate" color="black" />
      </div>
      <Footer />
    </div>
  );
}
