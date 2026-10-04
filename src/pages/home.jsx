import Nav from "../components/nav";
import Hero from "../components/hero";
import System from "../components/system";
import Stats from "../components/stats";
import Work from "../components/work";
import Approach from "../components/approach";
import Stack from "../components/stack";
import Experience from "../components/experience";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Home = () => (
  <div className="grain min-h-screen bg-bg">
    <Nav />
    <main>
      <Hero />
      <System />
      <Stats />
      <Work />
      <Approach />
      <Stack />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Home;
