import Header from "./components/Header";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skillset from "./components/Skillset";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-white">
      <Header />
      <Banner />
      <Skillset />
      <Experience />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
