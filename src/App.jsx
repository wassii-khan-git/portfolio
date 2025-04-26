import { useEffect, useState } from "react";
import Home from "./pages/home";
import ScrollButton from "./components/scrollButton";

function App() {
  // Scroll
  const [scroll, setScroll] = useState("");
  // Scroll Handler
  const ScrollHandler = () => {
    const position = window.scrollY;
    if (position > 50) {
      setScroll("scroll-visible");
    } else {
      setScroll("scroll-hidden");
    }
  };

  const ScrolltoTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollHandler);
    return () => window.removeEventListener("scroll", ScrollHandler);
  }, []);
  return (
    <>
      <ScrollButton scroll={scroll} ScrolltoTop={ScrolltoTop} />
      <Home />
    </>
  );
}

export default App;
