import Home from "./pages/home";
import { SmoothScrollProvider } from "./hook/useLenis";

const App = () => (
  <SmoothScrollProvider>
    <Home />
  </SmoothScrollProvider>
);

export default App;
