// pages/Home.jsx
import Contact from "../components/contact";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";
import Skills from "../components/skills";
import { useScroll } from "../hook";
import { ScrollProvider } from "../hook/scrollContext";

const Section = ({ children, refName }) => {
  const { [refName]: ref } = useScroll();
  return (
    <div ref={ref} className="scroll-mt-16 dark:bg-gray-900">
      {children}
    </div>
  );
};

const HomeContent = () => {
  return (
    <div className="bg-halfwhite dark:bg-gray-900 min-h-screen">
      <Navbar />

      <main className="pt-16">
        <Section refName="heroRef">
          <Hero />
        </Section>

        <Section refName="featuresRef">
          <Features />
        </Section>

        <Section refName="portfolioRef">
          <Portfolio />
        </Section>

        <Section refName="skillsRef">
          <Skills />
        </Section>

        <Section refName="contactRef">
          <Contact />
        </Section>

        <Footer className="dark:bg-gray-800" />
      </main>
    </div>
  );
};

const Home = () => (
  <ScrollProvider>
    <HomeContent />
  </ScrollProvider>
);

export default Home;
